import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
        'This is simply a Test',
        'https://grantourismotravels.com/wp-content/uploads/2020/04' +
        '/Cambodian-Pork-and-Rice-Recipe-Bai-Sach-Chrouk-Copyright-2020-Terence-Carter-Grantourismo.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]
        ),
        new Recipe('A Test Recipe 2',
        'This is simply a Test',
        'https://grantourismotravels.com/wp-content/uploads/2020/04' +
        '/Cambodian-Pork-and-Rice-Recipe-Bai-Sach-Chrouk-Copyright-2020-Terence-Carter-Grantourismo.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ]
        )
    ];

    constructor(private slService: ShoppingListService){ }

    getRecipes() {
        return this.recipes.slice(); // returns a copy instead of changing the constant list
    }

    addIngredientsToShoppinglist(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}