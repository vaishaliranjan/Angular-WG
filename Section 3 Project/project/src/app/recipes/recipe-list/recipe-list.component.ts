import { Component, EventEmitter,Output} from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test','https://th.bing.com/th/id/OIP.ZnWLc6kGUzb63_qb01smQQHaLH?rs=1&pid=ImgDetMain' ),
    new Recipe('A Test Recipe','This is simply a test','https://th.bing.com/th/id/OIP.ZnWLc6kGUzb63_qb01smQQHaLH?rs=1&pid=ImgDetMain' )
  ];
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}