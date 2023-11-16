import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';

@NgModule({
  declarations: [
    RecipeSearchComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class RecipesModule { }
