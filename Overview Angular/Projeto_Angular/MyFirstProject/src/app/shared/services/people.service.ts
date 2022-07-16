import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any>{
    let peopleArray = [
      {
        nome: 'Cleberton',
        sobrenome: 'Barreto',
        age: 33
      },
      {
        nome: 'Izabel',
        sobrenome: 'Correia',
        age: 26
      },
      {
        nome: 'Lavínia',
        sobrenome: 'Correia',
        age: 3
      },
      {
        nome: 'Nicolas',
        sobrenome: 'Correia',
        age: 1
      }
    ]

    return of(peopleArray) //Para garantir que o nosso Array é o valor único que nosso observable irá retornar
  }

}
