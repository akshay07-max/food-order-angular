import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service'; // Access Of services
import { Foods } from '../shared/models/food';   // accessing foods name, id price and many more
import { ActivatedRoute } from '@angular/router';  //getting route

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Foods[]=[];
  constructor( private fs:FoodService, private route:ActivatedRoute){ }  // ingecting data

  ngOnInit():void {

    // function to get food in location(url) by food name. name property is in services
    this.route.params.subscribe(params=>{
      if(params['searchItem'])
      this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
    
      else if(params['tag'])
      this.foods = this.fs.getAllFoosByTag(params['tag'])


      else
      this.foods = this.fs.getAll();
    });
     
  }
}
