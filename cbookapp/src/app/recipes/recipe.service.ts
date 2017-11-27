import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();


  private recipes : Recipe[] = [

    new Recipe('pierwszy przepis','Lorem ipsum dolor sit amet enim. Etiam ullamcorper. ' +
      'Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis,' +
      ' malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.' +
      ' Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in,' +
      ' dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, ' +
      'mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.' +
      ' Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, ' +
      'vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, ',
      [
        new Ingredient('Składnik 11', 120, 'kg'),
        new Ingredient('Składnik 12', 34, 'litry'),
        new Ingredient('Składnik 13', 3, 'kg')
      ]),
    new Recipe('drugi przepis','Lorem ipsum dolor sit amet enim. Etiam ullamcorper.' +
      ' Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis,' +
      ' malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.' +
      ' Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum ' +
      'in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, ' +
      'mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing ' +
      'wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed,' +
      ' vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, ',
      [
        new Ingredient('Składnik 21', 5, 'kg'),
        new Ingredient('Składnik 22', 4, 'litry'),
        new Ingredient('Składnik 23', 3, 'kg'),
        new Ingredient('Składnik 24', 35, 'kg')
      ]),
    new Recipe('trzeci przepis','Lorem ipsum dolor sit amet enim. Etiam ullamcorper.' +
      ' Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis,' +
      ' malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.' +
      ' Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, ' +
      'dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, ' +
      'mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing ' +
      'wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed,' +
      ' vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, ',
      [
        new Ingredient('Składnik 31', 20, 'kg'),
        new Ingredient('Składnik 32', 4, 'litry'),
        new Ingredient('Składnik 33', 3, 'kg')
      ])
  ];

  constructor(private shoppingListService : ShoppingListService) { }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToSL(ingredients : Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);

  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number ){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
