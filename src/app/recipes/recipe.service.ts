import { EventEmitter } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a Test', 'https://grantourismotravels.com/wp-content/uploads/2020/04' +
        '/Cambodian-Pork-and-Rice-Recipe-Bai-Sach-Chrouk-Copyright-2020-Terence-Carter-Grantourismo.jpg'),
        new Recipe('A Test Recipe 2', 'This is simply a Test', 'https://grantourismotravels.com/wp-content/uploads/2020/04' +
        '/Cambodian-Pork-and-Rice-Recipe-Bai-Sach-Chrouk-Copyright-2020-Terence-Carter-Grantourismo.jpg')
    ];

    getRecipes() {
        return this.recipes.slice(); // returns a copy instead of changing the constant list
    }
}