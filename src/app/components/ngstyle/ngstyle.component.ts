import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  template: `

  <h3 [style.color]="color"> ng style</h3>
   <p [style.fontSize.px]="tamano">
     Hola mundo.. esta es una etiqueta
  </p>

  <button class="btn btn-primary" (click)="tamano = tamano + 5">
  <i class="fas fa-plus"></i>
  </button>
  <button class ="btn btn-danger"  (click)="tamano = tamano - 5">
  <i class="fas fa-minus"></i>
  </button>
  `,
  styles: []
})
export class NgstyleComponent implements OnInit {

  tamano = 30;
  color = "red";

  constructor() { }

  ngOnInit() {
  }

}
