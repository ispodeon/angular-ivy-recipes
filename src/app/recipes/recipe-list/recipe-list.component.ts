import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a Test', 'https://grantourismotravels.com/wp-content/uploads/2020/04' +
    '/Cambodian-Pork-and-Rice-Recipe-Bai-Sach-Chrouk-Copyright-2020-Terence-Carter-Grantourismo.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a Test', 'https://grantourismotravels.com/wp-content/uploads/2020/04' +
    '/Cambodian-Pork-and-Rice-Recipe-Bai-Sach-Chrouk-Copyright-2020-Terence-Carter-Grantourismo.jpg')
  ];

  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
