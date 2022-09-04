import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

// import { Ingredient } from 'src/app/shared/ingredient.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  edittedItemIndex: number;
  editteedItem: Ingredient;
  
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  // @ViewChild('nameInput') nameInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(){
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.edittedItemIndex = index;
          this.editMode = true;
          this.editteedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editteedItem.name,
            amount: this.editteedItem.amount
          });
        }
      );
  }

  onSubmit(form: NgForm){
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.edittedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete(){
    this.slService.onDeleteIngredient(this.edittedItemIndex);
    this.onClear();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
