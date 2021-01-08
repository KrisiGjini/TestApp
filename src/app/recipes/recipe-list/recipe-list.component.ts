import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('A test recipe','This is a test', 'https://media.istockphoto.com/photos/set-of-sushi-and-rolls-with-salmon-and-tuna-avocado-california-maki-picture-id1066110176?k=6&m=1066110176&s=612x612&w=0&h=aD-74pTAYfFR5wQa_jGdaqa8Dzjett7Sz2vfAniSKPM=', 5),

  new Recipe('Second test recipe','This is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg', 3)

];
  constructor() { }

  ngOnInit(): void {
  }
onRecipeSelected(recipe:Recipe){
  this.recipeWasSelected.emit(recipe);

}
}
