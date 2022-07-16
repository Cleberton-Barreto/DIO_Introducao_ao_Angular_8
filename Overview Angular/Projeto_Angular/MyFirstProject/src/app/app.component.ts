import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyFirstProject';
  count: number = 0

  text = ''

  clicou(nome: string) {
    console.log('clicou em mim', nome)
  }

  pessoas = [
    {
      nome: '',
      sobrenome: '',
      age: 0
    }
  ]

  constructor(private peopleService: PeopleService){}

  ngOnInit() {
    let interval = setInterval(() => {
      this.count++
      if(this.count === 10){
        clearInterval(interval)
      }
    }, 1000)
    
    this.getPeople()
  }

  getPeople(){
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people
    })
  }
}
