import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {

  @Input()  // used for child to child component data transfer
  foodPagetags?:string[] //transferring data to foodpage. to get only one tag data which food we clicked on

  @Input()
  justifyContent:string = 'center'

  tags?:Tag[] = [];


    constructor(private fs:FoodService) { }



    ngOnInit():void
    {
      if(!this.foodPagetags)
      this.tags = this.fs.getAllTag()

    }
}
