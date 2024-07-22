import { Component } from '@angular/core';
import { ClienteService } from '../../cliente.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-datos',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  providers:[ClienteService],
  templateUrl: './mostrar-datos.component.html',
  styleUrl: './mostrar-datos.component.css'
})
export class MostrarDatosComponent {
  clientes: any = [];
  

  constructor(public ClienteService: ClienteService, public router:Router) {}

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.ClienteService.getAllClientes().then((data: any) => {
      this.clientes = data;
    }).catch((err) => {
      console.log(err);
    });
  }
  editarCliente(id: string) {
    this.router.navigate(['/editar', id]);
  }
  

  eliminarCliente(id: string) {
    this.ClienteService.deleteCliente(id).then(() => {
      this.obtenerClientes();
    }).catch((err) => {
      console.log(err);
    });
  }
}
