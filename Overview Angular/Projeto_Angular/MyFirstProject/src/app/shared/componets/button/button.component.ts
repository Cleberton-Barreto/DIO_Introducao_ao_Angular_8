import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnText: string = ''
  @Input() btnType: string = '' 
  @Output() click = new EventEmitter


  constructor() { }

  ngOnInit(): void {
  }

  clicou() {
    console.log('clicou no filho')
  }
}
