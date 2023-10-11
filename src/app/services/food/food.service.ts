import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  // Getting food by id for cart, for foodPage Component
  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  //creating Method Or function for getting foods by tag name
  getAllFoosByTag(tag: string): Foods[] {
    if (tag == 'All') return this.getAll();
    else return this.getAll().filter((food) => food.tags?.includes(tag));

    // Easy Way for above function
    // retuen tag == "All"?
    // this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    //Accessing Services of tags to get Tags
    return[
      {name:'All', count:18},
      {name:'Fast Food', count:4},
      {name:'Lunch', count:8},
      {name:'Burger', count:1},
      {name:'South Indian', count:5},
      {name:'Non-Veg', count:2},
      {name:'InterNational', count:2},
      {name:'Fruit', count:1},

    ]
  }


  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Burger King',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origin: ['Itely', 'US'],
        star: 4.5,
        imageUrl: '/assets/images/burger.jpeg',
        tags: ['Fast Food', 'Burger', 'Lunch'],
      },

      {
        id: 2,
        name: 'Chicken Lolipop',
        cookTime: '30-50',
        price: 30,
        favorite: false,
        origin: ['India', 'US'],
        star: 5,
        imageUrl: '/assets/images/ChickenLoL.jpeg',
        tags: ['Non-Veg', 'Chicken', 'Lunch'],
      },

      {
        id: 3,
        name: 'Desi Food',
        cookTime: '50-60',
        price: 50,
        favorite: true,
        origin: ['India'],
        star: 4.5,
        imageUrl: '/assets/images/desiFood.jpeg',
        tags: ['BreakFast', 'desiFood'],
      },

      {
        id: 4,
        name: 'Fruits',
        cookTime: '0-0',
        price: 20,
        favorite: false,
        origin: ['india', 'Nepal'],
        star: 4,
        imageUrl: '/assets/images/fruits.jpeg',
        tags: ['Fruit', 'veg'],
      },

      {
        id: 5,
        name: 'Idali',
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origin: ['India', 'South India'],
        star: 4,
        imageUrl: '/assets/images/idali.jpeg',
        tags: ['Indian', 'South Indian'],
      },

      {
        id: 6,
        name: 'Momos',
        cookTime: '10-20',
        price: 20,
        favorite: false,
        origin: ['Itely', 'India'],
        star: 4.5,
        imageUrl: '/assets/images/momos.jpeg',
        tags: ['Fast Food', 'Momos', 'Lunch'],
      },

      {
        id: 7,
        name: 'Noddles',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origin: ['China', 'India'],
        star: 4.5,
        imageUrl: '/assets/images/nudles.jpeg',
        tags: ['Fast Food', 'Noddle', 'InterNational'],
      },

      {
        id: 8,
        name: 'South Thali',
        cookTime: '30-50',
        price: 40,
        favorite: false,
        origin: ['India', 'South India'],
        star: 4.5,
        imageUrl: '/assets/images/southTadka.jpeg',
        tags: ['BreakFast', 'southTadka', 'Lunch'],
      },

      {
        id: 9,
        name: 'Dal Tadka',
        cookTime: '30-50',
        price: 30,
        favorite: false,
        origin: ['India', 'Srilanka'],
        star: 4,
        imageUrl: '/assets/images/dalTadka9.jpeg',
        tags: ['Indian', 'dal', 'Lunch'],
      },

      {
        id: 10,
        name: 'Chole Puri',
        cookTime: '20-50',
        price: 30,
        favorite: false,
        origin: ['India', 'Nepal'],
        star: 4.5,
        imageUrl: '/assets/images/cholePuri10.jpeg',
        tags: ['Indian', 'Chole', 'Lunch'],
      },

      {
        id: 11,
        name: 'Pani Puri',
        cookTime: '5-10',
        price: 20,
        favorite: false,
        origin: ['India', 'Maharashtra'],
        star: 4.5,
        imageUrl: '/assets/images/panipuri11.jpeg',
        tags: ['Nasta', 'PaniPuri', 'Fast Food'],
      },

      {
        id: 12,
        name: 'Chicken Rice',
        cookTime: '20-30',
        price: 50,
        favorite: false,
        origin: ['India', 'United State'],
        star: 4.5,
        imageUrl: '/assets/images/chickenRice12.jpeg',
        tags: ['Non-Veg', 'Chicken', 'Dinner'],
      },

      {
        id: 13,
        name: 'Paneer',
        cookTime: '30-40',
        price: 60,
        favorite: false,
        origin: ['West India', 'Mumbai'],
        star: 4.5,
        imageUrl: '/assets/images/paneer13.jpeg',
        tags: ['dinner', 'paneer', 'Lunch'],
      },

      {
        id: 14,
        name: 'Mendu Wada',
        cookTime: '10-20',
        price: 30,
        favorite: true,
        origin: ['India', 'South India'],
        star: 4.5,
        imageUrl: '/assets/images/menduWada14.jpeg',
        tags: ['breakfast', 'mendu wada', 'South Indian'],
      },

      {
        id: 15,
        name: 'Masala Dosa',
        cookTime: '30-40',
        price: 40,
        favorite: true,
        origin: ['India', 'South India'],
        star: 4.5,
        imageUrl: '/assets/images/masalaDosa15.jpeg',
        tags: ['South Indian', 'Masala Dosa', 'Lunch'],
      },

      {
        id: 16,
        name: 'Rasagulla',
        cookTime: '30-50',
        price: 60,
        favorite: true,
        origin: ['India', 'Gujarat'],
        star: 4.5,
        imageUrl: '/assets/images/rassagulla16.jpeg',
        tags: ['InterNational', 'rasagulla', 'Sweets'],
      },

      {
        id: 17,
        name: 'South Thali',
        cookTime: '30-50',
        price: 50,
        favorite: false,
        origin: ['India', 'South India'],
        star: 4.5,
        imageUrl: '/assets/images/SouthIndianThali17.jpeg',
        tags: ['South Indian', 'thali', 'lunch'],
      },

      {
        id: 18,
        name: 'South Tadka',
        cookTime: '30-30',
        price: 40,
        favorite: false,
        origin: ['India', 'South India'],
        star: 4.5,
        imageUrl: '/assets/images/southTadka.jpeg',
        tags: ['South Indian', 'thali', 'lunch'],
      },
    ];
  }
}
