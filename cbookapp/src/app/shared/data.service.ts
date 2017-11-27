
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class DataService {

  constructor( private http: Http, private recipeService: RecipeService){}

  private apiUrl = "http://localhost:8080/recipes/";

  storeRecipes(){
    return this.http.post("http://localhost:8080/recipes.json", this.recipeService.getRecipes());
  }

  getRecipes(){
    this.http.get(this.apiUrl)
      .subscribe(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          this.recipeService.setRecipes(recipes);
        }
      );
  }

}
