import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaFundo]'
})
export class MarcaFundo {
  @HostBinding('style.backgroundColor') Fundo: string = ''

  @HostListener('mouseover') aoPassarMouse(){
    this.Fundo = 'gray'
  }

  @HostListener('mouseout') aoTirarMouse(){
    this.Fundo = 'transparent'
  }

  constructor() { }

}
