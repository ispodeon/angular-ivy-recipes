import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;

  // constructor(private recipeService: RecipeService) { }
  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected
    //   .subscribe( // you use ES6 arrow function  (data here) => {function body here}
    //     (recipe: Recipe) => {
    //       this.selectedRecipe = recipe;
    //     }
    //   )
  }
}
