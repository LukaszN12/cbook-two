package com.cookbook.cbook;

import com.cookbook.cbook.entity.Recipe;
import com.cookbook.cbook.service.RecipeDAOService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.logging.Logger;

//@Component
public class recipeDaoServiceComandlineRunner implements CommandLineRunner {


    private static final org.slf4j.Logger log = LoggerFactory.getLogger(CommandLineRunner.class);

    @Autowired
    private RecipeDAOService recipeDAOService;

    @Override
    public void run(String... args) throws Exception {
        Recipe recipe = new Recipe("Kaszanka","Kazdy wie jak robic kaszanke");
        long insert = recipeDAOService.insert(recipe);
        log.info("Recipe created: " + recipe);

    }
}
