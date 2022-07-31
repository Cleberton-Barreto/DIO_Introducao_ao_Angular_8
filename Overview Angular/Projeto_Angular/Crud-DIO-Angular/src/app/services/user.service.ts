import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "https://sheet.best/api/sheets/2199c13c-e883-44fb-82b6-9815822429ba"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - CREATE - READ - UPDATE - DELETE

  // Retorna a lista de usuários READ

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  // Salva usuário no banco CREATE
  postUser(user: User): Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions)

  }

  // Exclui o usuário do banco DELETE
  deleteUser(Id: number):Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/Id/${Id}`)
  }

  // Edita usuário no banco  UPDATE
  updateUser(Id: string, user: User):Observable<User>{
    return  this.httpClient.put<User>(`${this.apiUrl}/Id/${Id}`, user, this.httpOptions)
  }

  // Lista uysuário único
  getUser(Id: string):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}/Id/${Id}`)
  }
}

