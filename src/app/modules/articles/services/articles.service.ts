import {Injectable} from '@angular/core';
import {SecureHttpClientService} from '../../shared/secure-http-client.service';
import {Observable} from 'rxjs';
import {Article} from '../entities/article';
import {Articleview} from "../entities/articleview";
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


  constructor(private secureHttpClientService: SecureHttpClientService) {
  }

  getArticles(): Observable<any> {
    return this.secureHttpClientService.get(environment.apiUrl + '/article/get/id/1');
  }

  saveArticle(article: Article): Observable<any> {
    return this.secureHttpClientService.post(environment.apiUrl + '/article/save', article);
  }

  updateArticle(article: Article): Observable<any> {
    return this.secureHttpClientService.post(environment.apiUrl + '/article/update', article);
  }

  getAllArticles(): Observable<any> {
    return this.secureHttpClientService.get(environment.apiUrl + '/article/all');
  }

  deleteArticle(article: Article): Observable<any> {
    return this.secureHttpClientService.post(environment.apiUrl + '/article/delete', article);
  }

  getArticleById(id: number): Observable<Article> {
    return this.secureHttpClientService.get(environment.apiUrl + '/article/id/' + id);
  }

  getAllArticlesView(): Observable<Articleview[]> {
    return this.secureHttpClientService.get(environment.apiUrl + '/articleview/all');
  }

}
