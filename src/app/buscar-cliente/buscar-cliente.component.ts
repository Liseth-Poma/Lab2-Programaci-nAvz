import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { ClienteService } from '../cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buscar-cliente',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers:[ClienteService],
  templateUrl: './buscar-cliente.component.html',
  styleUrl: './buscar-cliente.component.css'
})
export class BuscarClienteComponent {
  public cliente:any;
  public nombre:string = "";
  public cedula:string = "";
  public telefono:string = "";
  public direccion:string = "";
  public correo:string = "";

  constructor(public ClienteService:ClienteService, private router: Router){

  }
  async getUsuarioByCedula() {
    try {
      this.cliente = await this.ClienteService.getClienteByCedula(this.cedula);
      if (this.cliente && this.cliente.length > 0) {
        this.nombre = this.cliente[0].nombre;
        this.cedula = this.cliente[0].cedula;
        this.telefono = this.cliente[0].telefono;
        this.direccion = this.cliente[0].direccion;
        this.correo = this.cliente[0].correo;
      } else {
        console.log("Cliente no encontrado");
      }
    } catch (error) {
      console.log(error);
    }
  }

  navigateToInicio() {
    this.router.navigate(['/inicio']);
  }
}
