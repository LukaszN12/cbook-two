import {Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientsEditing = new Subject<number>();

  private ingredients : Ingredient[] =[
    new Ingredient('składnik1',12,'kg'),
    new Ingredient('składnik2',1234,'l'),
    new Ingredient('składnik3',4,'szt'),
    new Ingredient('składnik4',142,'kg'),
    new Ingredient('składnik5',56,'kg'),
    new Ingredient('składnik6',14,'kg'),
  ];

  constructor() {}

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients : Ingredient[]){
    for(let ingredient of ingredients){
      this.addIngredient(ingredient);
    }
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
