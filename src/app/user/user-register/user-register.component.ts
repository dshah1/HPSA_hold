import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {UserService} from 'src/app/services/user.service';
import {User} from 'src/app/model/user';
import * as alertify from 'alertifyjs';
import { JsonFormatter } from 'tslint/lib/formatters';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  user:User;
  userSubmitted: boolean;

  constructor(private fb:FormBuilder, private userService:UserService) { }

  ngOnInit() {
   // this.registrationForm = new FormGroup({
   //   userName: new FormControl('Mark', Validators.required),
   //   email: new FormControl('abc@msn.com', [Validators.required, Validators.email]),
   //   password: new FormControl('12ab', [Validators.required, Validators.minLength(4)]),
   //   confirmPassword: new FormControl('12ab', [Validators.required]),
   //   mobile: new FormControl('1238527413', [Validators.required, Validators.maxLength(10)])
   // }, this.passwordMatchingValidatior);
   this.createRegistrationForm();
  }


  onSubmit() {
    console.log(this.registrationForm.value);
    this.userSubmitted=true;
    this.user=Object.assign(this.user,this.registrationForm.value);
    //localStorage.setItem('Users',JSON.stringify(this.user));
     this.userService.addUser(this.user);


    if(this.registrationForm.valid){
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted=false;
      alertify.success("you are done");
    } else {
      alertify.error("reDo");

    }
    this.registrationForm.reset();
    this.userSubmitted=false;
  }



  userData(): User{
    return this.user={
      userName : this.userName.value,
      email : this.email.value,
      password: this.password.value,
      //cpassword:this.confirmPassword.value,
      mobile:this.mobile.value
    }
  }

  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  createRegistrationForm(){
    this.registrationForm=this.fb.group({
      userName: ['Mark', Validators.required],
      email:  ['abc@hotmail.com',[Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword:[ null, Validators.required],
      mobil:[null,[Validators.required,Validators.maxLength(10)]]
    },{Validators: this.passwordMatchingValidatior});
  }

  passwordMatchingValidatior(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {notmatched: true};
  }
}
