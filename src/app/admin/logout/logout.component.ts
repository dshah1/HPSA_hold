import { Component, OnInit } from '@angular/core';
import {FormControl,Validators,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  logout= new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl(''),
    address: new FormControl('',[Validators.required
                               , Validators.pattern('[a-zA-Z]*')
                               , Validators.minLength(3)])
  });
  constructor() { }

  ngOnInit() {
  }
 get email(){
  return this.logout.get('email')
 }

 get address(){ return this.logout.get('address')
}

onSubmit(){
  console.warn(this.logout);
}

}

