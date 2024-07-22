import { Routes } from '@angular/router';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { InsertarClienteComponent } from './insertar-cliente/insertar-cliente.component';
import { EditarComponent } from './components/editar/editar.component';
import { HomeComponent } from './pages/home/home.component';



export const routes: Routes = [
  {
    path: 'buscarCliente', component:BuscarClienteComponent, pathMatch:'full'// redirectTo: 'buscarCliente'
    },

    {
      path: 'insertarCliente', component: InsertarClienteComponent, pathMatch:'full'// redirectTo: 'buscarCliente'
    },
    
    {
      path:  'editar/:id', component: EditarComponent, pathMatch:'full'// redirectTo: 'editar'
    },

    {
      path:  'inicio', component: HomeComponent, pathMatch:'full'// redirectTo: 'inicio'
    }
    
    
];
