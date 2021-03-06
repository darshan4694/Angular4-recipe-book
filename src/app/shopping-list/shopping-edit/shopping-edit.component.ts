import { Component, 
  OnInit, 
  ViewChild, 
  ElementRef,
  Output,
  EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef:  ElementRef;
  @ViewChild('amountInput') amountInputRef:  ElementRef;
  @Output() ingredientEmitter = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddClick(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingredientEmitted = new Ingredient(ingName, ingAmount);
    console.log(ingredientEmitted);
    this.ingredientEmitter.emit(ingredientEmitted);
  }
}
