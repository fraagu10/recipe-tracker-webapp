import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';

@NgModule({
  declarations: [
    RecipeSearchComponent,
    RecipeBookComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class RecipesModule { }
