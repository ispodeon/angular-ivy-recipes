import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import{ Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  id: number;

  subscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipes()[+this.route.snapshot.params['id']];

    this.subscription = this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
        // this.recipe = this.recipeService.getRecipes()[+params['id']];
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addToShoppingList(){
    this.recipeService.addIngredientsToShoppinglist(this.recipe.ingredients);
  }

  onEditRecipe() {
    // this.router.navigate(['edit'], {relativeTo: this.route}); 
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
