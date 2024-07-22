import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-cliente',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers: [ClienteService],
  templateUrl: './insertar-cliente.component.html',
  styleUrl: './insertar-cliente.component.css',
})
export class InsertarClienteComponent {
  //Variable para guardar las consultas y datos ejecutados en el web services
  public cliente: any;
  //Para nombre
  public nombre: string = "";
  //Para la cedula
  public cedula: string = "";
  //Para el telefono
  public telefono: string = "";
  //Para la dirección
  public direccion: string = "";
  //Para el correo
  public correo: string = "";

  //Contructor
  constructor(private router: Router, public ClienteService: ClienteService) {}

  async saveClientOnBDD() {
    try {
      let newClient = this.buildAndGetNewClientObject();
      await this.ClienteService.saveClient(newClient);
      console.log("El cliente ha sido registrado con éxito");
      this.router.navigate(['/inicio']);  // Navega a la página de inicio después de guardar
    } catch (error) {
      console.log("Ocurrió un error", error);
    }
  }


  buildAndGetNewClientObject() {
    let newClient = {
      nombre: this.nombre,
      cedula: this.cedula,
      telefono: this.telefono,
      direccion: this.direccion,
      correo: this.correo
    }
    return newClient;
  }

}
