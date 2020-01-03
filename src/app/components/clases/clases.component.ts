import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {

  alerta:string = "alert-info";

  propiedades:Object = {
    danger: false
  };

  constructor() { }

  ngOnInit() {
  }

  loading: boolean = false;
  ejecutar(){
    this.loading = true;
    setTimeout( () => this.loading=false, 3000 )
  }

}
