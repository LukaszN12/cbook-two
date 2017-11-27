package com.cookbook.cbook.service;

import com.cookbook.cbook.entity.Recipe;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

//@Repository
//@Transactional
public class RecipeDAOService {

    @PersistenceContext
    private EntityManager entityManager;

    public long insert(Recipe recipe){
        entityManager.persist(recipe);
        return recipe.getId();
    }
}
