import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup
  users: Array<User> = []
  userId: any = ''

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private actRoute: ActivatedRoute,
    private router: Router) { 
    this.userForm = this.fb.group({
      Id: '',
      Nome: '',
      Sobrenome: '',
      Idade: '',
      Profissao: ''
    })
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params =>{
      this.userId = params.get('Id')
      if(this.userId !== null){
        this.userService.getUser(this.userId).subscribe(result =>{
          this.userForm.patchValue({
            Id: result[0].Id,
            Nome: result[0].Nome,
            Sobrenome: result[0].Sobrenome,
            Idade: result[0].Idade,
            Profissao: result[0].Profissao
          })
        })
      }
    })

    this.getUsers()
  }

  getUsers(){
    this.userService.getUsers().subscribe(Response => {
      this.users = Response
    })
  }

  createUser(){
    this.userForm.get('Id')?.patchValue(this.users.length +1)
    this.userService.postUser(this.userForm.value).subscribe(result =>{
      console.log(`Usuário ${result.Nome} ${result.Sobrenome} foi cadastrado com sucesso !`)
    }, (err) => {

    }, () => {
      this.router.navigate(['/'])
    })
  }

  updateUser(){
    this.userService.updateUser(this.userId, this.userForm.value).subscribe(result => {
      console.log('usuário atualizado com sucesso', result)
    }, (err) => {

    }, () => {
      this.router.navigate(['/'])
    })
  }

  actionButton(){
    if(this.userId !== null){
      this.updateUser()
    }else{
      this.createUser()
    }
  }
}

