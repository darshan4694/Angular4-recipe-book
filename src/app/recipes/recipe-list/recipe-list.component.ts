import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeEmitToRecipes = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg'),
    new Recipe('Test Recipe 2', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg'),
    new Recipe('Test Recipe 3', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg'),
    new Recipe('Test Recipe 4', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg'),
    new Recipe('Test Recipe 5', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg'),
    new Recipe('Test Recipe 6', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg'),
    new Recipe('Test Recipe 7', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg'),
    new Recipe('Test Recipe 8', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    console.log(recipe);
    this.recipeEmitToRecipes.emit(recipe);
  }
}
