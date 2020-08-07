import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [CreateArticleComponent, ListArticlesComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule,
  ]
})
export class ArticlesModule { }
