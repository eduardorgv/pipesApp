import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Eduardo';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPrural
  clientes: string[] = ['María','Pedro','Jorge','Mario','Pepe'];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  //Función para cambiar a la persona
  cambiarPersona() {
    this.nombre = 'Sandra',
    this.genero = 'femenino'
  }

  //Función para borrar un cliente
  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Eduardo',
    edad: 22,
    direccion: 'Morelia, Mich'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
  ]

  //Async Pipe
  miObservable = interval(5000);
  //Async Pipe por promesa
  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    },3500);
  });

}
