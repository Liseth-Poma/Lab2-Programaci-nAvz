import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../cliente.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers:[ClienteService],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{
  cliente: any = {};
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ClienteService: ClienteService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.ClienteService.getClienteById(this.id).then((data: any) => {
        this.cliente = data[0];
      }).catch((err) => {
        console.log(err);
      });
    } else {
      console.error('ID no existe');
    }
  }
  
  guardarCambios() {
    if (this.id) {
      this.ClienteService.updateCliente(this.id, this.cliente).then(() => {
        this.router.navigate(['/inicio']);
      }).catch((err) => {
        console.log(err);
      });
    } else {
      console.error('ID no definido');
    }
  }

}
