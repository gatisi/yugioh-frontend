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
import {ConfirmationDialogComponent} from "../../../shared/components/confirmation-dialog/confirmation-dialog.component";


@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})

export class ListArticlesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cardName', 'boosterSet', 'rarity', 'edition', 'cardType', 'cardCount', 'update', 'delete', 'addCard'];
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getArticlesView() {
    this.articlesService.getAllArticlesView().subscribe(
      res => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?";
    dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.articlesService.deleteArticle(article).subscribe(
            res => this.ngOnInit()
          );
        }
      }
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
