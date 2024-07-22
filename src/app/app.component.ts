import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MostrarDatosComponent } from './components/mostrar-datos/mostrar-datos.component';
import { EditarComponent } from './components/editar/editar.component';
import { HomeComponent } from "./pages/home/home.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MostrarDatosComponent, EditarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Factura';
}