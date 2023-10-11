import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  // {path:"**", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"home", component: HomeComponent},
  {path:"search/:searchItem", component: HomeComponent}, // route ro search field
  {path: 'tag/:tag', component:HomeComponent},  //route for tags
  {path:'food/:id', component:FoodpageComponent}, // getting food by it's id
  {path:'cart-page', component: CartPageComponent}  //Cart page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
