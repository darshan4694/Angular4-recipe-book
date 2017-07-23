import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg'),
    new Recipe('Test Recipe', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg'),
    new Recipe('Test Recipe', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg'),
    new Recipe('Test Recipe', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg'),
    new Recipe('Test Recipe', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg'),
    new Recipe('Test Recipe', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg'),
    new Recipe('Test Recipe', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg'),
    new Recipe('Test Recipe', 'Test Recipe Description', 'http://media.dish.allrecipes.com/wp-content/uploads/2017/05/3787267_-Vegetarian-Korma-Photo-by-Daniel-Snoozy.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
