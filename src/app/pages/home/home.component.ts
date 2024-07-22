import { Component } from '@angular/core';
import { MostrarDatosComponent } from "../../components/mostrar-datos/mostrar-datos.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MostrarDatosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToInsertarCliente() {
    this.router.navigate(['/insertarCliente']);
  }
  navigateToBuscarCliente() {
    this.router.navigate(['/buscarCliente']);
  }
}
