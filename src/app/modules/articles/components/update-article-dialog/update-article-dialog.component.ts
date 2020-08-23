import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ArticlesService} from "../../services/articles.service";
import {Article} from "../../entities/article";
import {EnumsService} from "../../../shared/enums.service";
import {Articleview} from "../../entities/articleview";

@Component({
  selector: 'app-update-article-dialog',
  templateUrl: './update-article-dialog.component.html',
  styleUrls: ['./update-article-dialog.component.css']
})
export class UpdateArticleDialogComponent implements OnInit {
  edition = [];
  rarity = [];
  cardType = [];

  constructor(public dialogRef: MatDialogRef<UpdateArticleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public article: Article,
              private articlesService: ArticlesService,
              private enumsService: EnumsService
  ) {
  }
  buttonDisabled: boolean = false;


  ngOnInit(): void {
    this.getEnums();
  }

  saveArticle() {
    this.buttonDisabled = true;
    this.articlesService.updateArticle(this.article).subscribe(
      res => this.dialogRef.close()
    );
  }

  getEnums() {
    this.enumsService.getCardTypes().subscribe(
      res => this.cardType = res
    );
    this.enumsService.getCardRarities().subscribe(
      res => this.rarity = res
    );
    this.enumsService.getCardEditions().subscribe(
      res => this.edition = res
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}

