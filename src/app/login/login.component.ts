import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formValue!:FormGroup;

  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router, private tost:NgToastService) { }

  ngOnInit(): void {
      this.formValue = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
  }

    login(){
      this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
        const user = res.email === this.formValue.value.email && res.password === this.formValue.value.password
        if(user){
          // alert("Login Successful😍")
          this.tost.success({detail:'Success Message', summary:"Login Successful😍", duration:9000})
          this.formValue.reset();
         this.router.navigate(['/home']);

         localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
         this.formValue.value.email? localStorage.setItem("usertype", 'employee'):''
         
        }else{
          // alert("User Not Found!!")
          this.tost.error({detail:"Error Message", summary:"Invalid email or password!",duration:8000});
        }
        }, error=>{
          this.tost.warning({detail:"Error Message", summary:"Something went Wrong!", duration:8000})
          // alert("Something went Wrong!")
      })
    }

}
