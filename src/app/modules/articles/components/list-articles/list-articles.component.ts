import {Component, OnInit, ViewChild} from '@angular/core';
import {ArticlesService} from '../../services/articles.service';
import {MatDialog} from '@angular/material/dialog';
import {Article} from '../../entities/article';
import {Router} from '@angular/router';
import {UpdateArticleDialogComponent} from '../update-article-dialog/update-article-dialog.component';
import {Articleview} from '../../entities/articleview';
import {formatNumber} from '@angular/common';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";


@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})

export class ListArticlesComponent implements OnInit {

  public articles: Articleview[] = [];
  displayedColumns: string[] = ['id', 'booster set', 'card name', 'rarity', 'edition', 'card type', 'card count', 'update', 'delete', 'addCard'];
  dataSource: MatTableDataSource<Articleview>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

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
        this.articles = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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

  goToStockItemsList(id) {
    this.router.navigateByUrl('stockitems/list/id/' + id + '/searchBy/article');
  }

}
