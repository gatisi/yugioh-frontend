import {Component, OnInit} from '@angular/core';
import {ArticlesService} from '../../services/articles.service';
import {MatDialog} from '@angular/material/dialog';
import {Article} from '../../entities/article';
import {Router} from '@angular/router';
import {UpdateArticleDialogComponent} from '../update-article-dialog/update-article-dialog.component';
import {Articleview} from '../../entities/articleview';
import {formatNumber} from '@angular/common';


@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})

export class ListArticlesComponent implements OnInit {

  public articles: Articleview[] = [];
  displayedColumns: string[] = ['id', 'booster set', 'card name', 'rarity', 'edition', 'card type', 'card count', 'update', 'delete', 'addCard'];


  constructor(
    private articlesService: ArticlesService,
    private dialog: MatDialog,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getArticlesView();
  }

  getArticles() {
    this.articlesService.getAllArticles().subscribe(
      res => {
        console.log(res);
        this.articles = res;
      }
    );
  }

  getArticlesView() {
    this.articlesService.getAllArticlesView().subscribe(
      res => {
        console.log(res);
        this.articles = res;
      }
    );
  }

  editArticle(article: Article): void {
    const dialogRef = this.dialog.open(UpdateArticleDialogComponent, {
      width: '600px',
      data: article
    });

    dialogRef.afterClosed().subscribe(result => this.ngOnInit());
  }

  deleteArticle(article: Article): void {
    this.articlesService.deleteArticle(article).subscribe(
      res => this.ngOnInit()
    );
  }

  addCard(article: Article) {
    this.router.navigateByUrl('stockitems/create/' + article.id);
  }

  onBack(): void {
    this.router.navigate(['/Home']);
  }

  getClassByQuantity(quantity: number): string {
    if (quantity == 0) {
      return 'red';
    }
    return 'green';

  }

}
