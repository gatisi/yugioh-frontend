import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateArticleComponent} from "./components/create-article/create-article.component";
import {ListArticlesComponent} from "./components/list-articles/list-articles.component";
import {CreateUserComponent} from "../users/components/create-user/create-user.component";


const routes: Routes = [
  {
    path: 'articles',
    children: [
      {
        path: 'create',
        component: CreateArticleComponent
      },
      {
        path: 'list',
        component: ListArticlesComponent
      },
      {
        path: 'update/:articleId',
        component: CreateArticleComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ArticlesRoutingModule {
}
