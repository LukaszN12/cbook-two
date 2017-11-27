package com.cookbook.cbook;

import com.cookbook.cbook.entity.Recipe;
import com.cookbook.cbook.service.RecipeDAOService;
import com.cookbook.cbook.service.RecipeRepository;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

//@Component
public class RecipeRepositoryComandlineRunner implements CommandLineRunner {


    private static final org.slf4j.Logger log = LoggerFactory.getLogger(CommandLineRunner.class);

    @Autowired
    private RecipeRepository recipeRepository;

    @Override
    public void run(String... args) throws Exception {
//        Recipe recipe = new Recipe("Salceson","Salceson jest robiony ze swini","swinia");
//        recipeRepository.save(recipe);
//        log.info("Recipe created: " + recipe);
//
//        Optional<Recipe> recipeOne = recipeRepository.findById(1L);
//        log.info("Recipe with id one: " + recipeOne);
//
//
//        List<Recipe> recipes = recipeRepository.findAll();
//        log.info("All recipes: " + recipes);

    }
}
