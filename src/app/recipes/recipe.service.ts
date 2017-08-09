import {Recipe} from './recipe.model';

export class RecipeService {
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

    getRecipes() {
        return this.recipes.slice();
    }
}