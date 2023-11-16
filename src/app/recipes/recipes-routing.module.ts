import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';

const routes: Routes = [
    { path: 'recipe-search', component: RecipeSearchComponent },
    { path: 'recipe-book', component: RecipeBookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
