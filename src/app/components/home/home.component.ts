import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
    <!--<router-outlet></router-outlet>-->
    <hr>
    <h1 class="text-center">Demos Angular</h1>
    <hr>
    <app-ngstyle></app-ngstyle>
    <app-css></app-css>
    <app-clases></app-clases>


    <!-- Directivas-->
    <p appResaltado>Hola mundo</p>
    <p [appResaltado]="'blue'">Hola mundo</p>
    <p [appResaltado]="'orange'">Hola mundo</p>
    <p [appResaltado]="'red'">Hola mundo</p>

    <app-ng-switch></app-ng-switch>
</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
