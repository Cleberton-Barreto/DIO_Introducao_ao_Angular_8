import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Array<User> = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void{
    this.userService.getUsers().subscribe(Response => {
      this.users = Response
    }, (err) =>{
      console.log(err)
    })
  }  

  deleteUser(Id: number): void{
    this.userService.deleteUser(Id).subscribe(response => {
      console.log('Usuário excluído')
    }, (err) =>{
      console.log(err)
    }, () => {
      this.getUsers()
    })
  }
}
