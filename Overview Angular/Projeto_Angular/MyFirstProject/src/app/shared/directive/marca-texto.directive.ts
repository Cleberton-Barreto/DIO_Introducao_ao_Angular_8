import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit {
  @Input() corDeFundo = 'black'
  @Input() corDoTexto = 'yellow'

  
  constructor(private elemento: ElementRef) { }

  ngOnInit() {
    this.mudarFundo()
  }

  private mudarFundo(cor: string ='' ){
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor
    this.elemento.nativeElement.style.color = this.corDoTexto
    this.elemento.nativeElement.style.fontWeight = 'bold'
  }

}
