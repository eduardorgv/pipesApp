import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'eduardo';
  nombreUpper: string = 'EDUARDO';
  nombreCompleto: string = 'EduARdo roDRIgueZ';

  fecha: Date = new Date();
  
}
