// Model For getting Food Info

export class Foods{
    id!: number;
    price!:number;
    name!:string;
    favorite!:boolean;
    star:number = 0;
    tags?:string[];
    imageUrl!:string;
    cookTime!:string;
    origin!:string[];
}