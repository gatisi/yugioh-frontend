import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {ArticlesService} from "../../services/articles.service";
import {Article} from "../../entities/article";

@Component({
  selector: 'app-update-article-dialog',
  templateUrl: './update-article-dialog.component.html',
  styleUrls: ['./update-article-dialog.component.css']
})
export class UpdateArticleDialogComponent implements OnInit {
  edition = [];
  rarity = [];
  cardType = [];
  articleForm = new FormGroup({
    boosterSet: new FormControl(''),
    cardName: new FormControl(''),
    edition: new FormControl(''),
    rarity: new FormControl(''),
    cardType: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<UpdateArticleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public article: Article,
              private articlesService: ArticlesService
  ) { }


  ngOnInit(): void {
  }
  saveArticle() {
    this.articlesService.updateArticle(this.article).subscribe(
      res => this.dialogRef.close()
    );
  }
  close(): void {
    this.dialogRef.close();
  }

}

