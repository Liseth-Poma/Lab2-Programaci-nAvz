import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getClienteByCedula(cedula: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'cliente/' + cedula).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
          reject(err);
        },
      });
    });
  }

  saveClient(data: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cliente/', data).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
          reject(err);
        },
      });
    });
  }

  getAllClientes() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'cliente/').subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
          reject(err);
        },
      });
    });
  }

  getClienteById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'usuario/' + id).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
          reject(err);
        },
      });
    });
  }

  updateCliente(id: string, cliente: any) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url + 'cliente/' + id, cliente).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
          reject(err);
        },
      });
    });
  }

  deleteCliente(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url + 'cliente/' + id).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
          reject(err);
        },
      });
    });
  }
}
