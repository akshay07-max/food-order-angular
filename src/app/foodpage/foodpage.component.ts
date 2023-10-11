import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit{

  food!:Foods;
  constructor (private activatedRoute:ActivatedRoute, private foodSevices: FoodService, private cartService:CartService, private router:Router) { 
    // From Above: importing foo services to get funcs or anything from service.
    // Activate route or router is used to add route of other components
    // cart services is for importing cart services 

    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food =   foodSevices.getFoodById(params['id'])
    })
  }

  ngOnInit(): void {
  }

    addToCart(){
        this.cartService.addToCart(this.food);
        this.router.navigateByUrl('/cart-page') // go to cart page, using this method when we click on button it navigates us to cart page.(clearing or hiding current page).
      }
  

}
