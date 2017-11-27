package com.cookbook.cbook.resource;

import com.cookbook.cbook.entity.Ingredient;
import com.cookbook.cbook.entity.Recipe;
import com.cookbook.cbook.exceptions.RecipeNotFoundException;
import com.cookbook.cbook.service.IngredientRepository;
import com.cookbook.cbook.service.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
public class RecipeResource {

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private IngredientRepository ingredientRepository;

    @GetMapping("/recipes")
    public List<Recipe> retrieveAllRecipes(){
        return recipeRepository.findAll();
    }

    @GetMapping("recipes/{id}")
    public Optional<Recipe> retrieveRecipe(@PathVariable Long id){
        Optional<Recipe> recipe = recipeRepository.findById(id);
        if(!recipe.isPresent()){
            throw new RecipeNotFoundException("id: " + id);
        }
        return recipe;
    }

    @DeleteMapping("recipes/{id}")
    public void deleteRecipe(@PathVariable Long id){
        recipeRepository.deleteById(id);
    }

    @PostMapping("/recipes")
    public ResponseEntity<Object> createRecipe(@RequestBody Recipe recipe){
        Recipe savedRecipe = recipeRepository.save(recipe);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedRecipe.getId()).toUri();

        return ResponseEntity.created(location).build();

    }

    @GetMapping("/recipes/{id}/ingredients")
    public List<Ingredient> retrieveAllRecipeIngredients (@PathVariable Long id){
        Optional<Recipe> recipeOptional = recipeRepository.findById(id);
        if(!recipeOptional.isPresent()){
            throw new RecipeNotFoundException("id: " + id);
        }
        return recipeOptional.get().getIngredients();
    }

    @PostMapping("recipes/{id}/ingredients")
    public ResponseEntity<Object> createIngredient (@PathVariable Long id, @RequestBody Ingredient ingredient){
        Optional<Recipe> recipeOptional = recipeRepository.findById(id);
        if(!recipeOptional.isPresent()){
            throw new RecipeNotFoundException("id: " + id);
        }

        Recipe recipe = recipeOptional.get();

        ingredient.setRecipe(recipe);

        ingredientRepository.save(ingredient);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(ingredient.getId()).toUri();

        return ResponseEntity.created(location).build();

    }

    @DeleteMapping("recipes/{id}/ingredients/{idIng}")
    public void deleteIngredient(@PathVariable Long id, @PathVariable Long idIng){
        //recipeRepository.deleteById(id);
        ingredientRepository.deleteById(idIng);
    }

}
