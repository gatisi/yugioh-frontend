import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SharedModule} from '../shared/shared.module';
import { UpdateArticleDialogComponent } from './components/update-article-dialog/update-article-dialog.component';
import {CreateUserComponent} from "../users/components/create-user/create-user.component";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MaterialExampleComponent } from './components/material-example/material-example.component';


@NgModule({
  declarations: [CreateArticleComponent, ListArticlesComponent, UpdateArticleDialogComponent, MaterialExampleComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule,
    MatSortModule,
    MatPaginatorModule,
  ]
})
export class ArticlesModule { }
