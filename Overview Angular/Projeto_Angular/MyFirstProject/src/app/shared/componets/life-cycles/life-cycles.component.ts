import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit,} from '@angular/core';

@Component({
  selector: 'app-life-cycles',
  templateUrl: './life-cycles.component.html',
  styleUrls: ['./life-cycles.component.css']
})
export class LifeCyclesComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input() number = 10

  constructor() { 
    console.log('chamou o construtor');
  }

  ngOnChanges(): void {
    console.log('chamou o ngOnChanges')
  }

  ngOnInit(): void {
    console.log('chamou o ngOnInit')
  }

  ngDoCheck(): void {
    console.log('chamou o ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('chamou o ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('chamou o ngAfterContentChecked')
  }

  AfterViewInit(): void {
    console.log('chamou o AfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('chamou o ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('chamou o ngOnDestroy')
  }
}
