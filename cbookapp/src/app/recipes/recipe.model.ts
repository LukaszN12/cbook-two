import {Ingredient} from '../shared/ingredient.model';

export class Recipe{
 // public id: number;
  public name: string;
  public description: string;
  public ingredients: Ingredient[];

  constructor( name: string, description: string, ingredients: Ingredient[]){
    //this.id = id;
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
  }
}
