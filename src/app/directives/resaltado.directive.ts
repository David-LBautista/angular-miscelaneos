import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(
    private ele: ElementRef
  ) { 
    console.log("Directiva lamada!");
    //ele.nativeElement.style.backgroundColor = "yellow";
  }


  //para poder estar pendiente de los eventos por ejemplo en este caso queremos que en onhover se resalte se importa HostListener
  @HostListener('mouseenter') mouseEntro(){
    this.ele.nativeElement.style.backgroundColor = "yellow";
  }
  @HostListener('mouseleave') mouseSalio(){
    this.ele.nativeElement.style.backgroundColor = null;
  }



  //si queremos indicar a que color queremos que cambie de forma independiente importamos el modulo de Input y en el html indicamos el color
  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') entro(){
      this.resaltar( this.nuevoColor || "yellow")
  }
  @HostListener('mouseleave') salio(){
    this.resaltar( null );
  }

  private resaltar( color:string ){
    this.ele.nativeElement.style.backgroundColor = color;
  }
}
