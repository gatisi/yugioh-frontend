import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../../services/articles.service";
import {MatDialog} from "@angular/material/dialog";
import {Article} from "../../entities/article";

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  public articles = [];
  displayedColumns: string[] = ['id', 'booster set', 'card name', 'rarity', 'edition', 'card type', 'update', 'delete'];


  constructor(
    private articlesService: ArticlesService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.articlesService.getAllArticles().subscribe(
      res => {
        this.articles = res;
      }
    );
  }

  // editArticle(article: Article): void {
  //   const dialogRef = this.dialog.open(UpdateArticleDialogComponent, {
  //     width: '600px',
  //     data: article
  //   });

  //   dialogRef.afterClosed().subscribe(result => this.ngOnInit());
  // }

  deleteArticle(article: Article): void {
    this.articlesService.deleteArticle(article).subscribe(
      res => this.ngOnInit()
    );
  }

}
