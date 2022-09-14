import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyForm: NgForm;
SellRent ='1';
  constructor(private router:Router) { }



  ngOnInit() {
     setTimeout(() => {
      this.addPropertyForm.controls['Name'].setValue('default Value');
     },1000);
  }

   onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(Form:NgForm){
    console.log(this.addPropertyForm);
    console.log('submitted: multiple Times');
    console.log(Form);
  }
}
