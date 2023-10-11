import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    myForm!:FormGroup;

    constructor(private fb:FormBuilder, private http:HttpClient, private router:Router) { }

    ngOnInit(): void {
        this.myForm = this.fb.group({
          name: ['', Validators.required],
          email: ['', Validators.required],
          mobile: ['', Validators.required],
          password: ['', Validators.required]
        })
    }

    signup(){
      this.http.post<any>("http://localhost:3000/signup", this.myForm.value).subscribe(res=>{
        alert("Registered Successfully😉");
        this.myForm.reset();
        this.router.navigate(['login']);
      }, error=>{
        alert("Something went wrong please try after some time..")
      });
      
    }
}
