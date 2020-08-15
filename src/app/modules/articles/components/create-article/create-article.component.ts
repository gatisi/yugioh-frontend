import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ArticlesService} from "../../services/articles.service";
import {AuthService} from "../../../shared/auth.service";
import {EnumsService} from "../../../shared/enums.service";


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
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

  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    private enumsService: EnumsService,
  ) {
  }

  ngOnInit(): void {
    this.getEnums();
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

  saveArticle() {
    console.log(this.articleForm.getRawValue());
    this.articlesService.saveArticle(this.articleForm.getRawValue()).subscribe();
    this.router.navigateByUrl('articles/list');
  }

}
