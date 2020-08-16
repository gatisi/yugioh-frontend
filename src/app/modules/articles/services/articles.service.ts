import {Injectable} from '@angular/core';
import {SecureHttpClientService} from '../../shared/secure-http-client.service';
import {Observable} from 'rxjs';
import {Article} from '../entities/article';
import {Articleview} from "../entities/articleview";


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


  constructor(private secureHttpClientService: SecureHttpClientService) {
  }

  getArticles(): Observable<any> {
    return this.secureHttpClientService.get('http://localhost:8080/article/get/id/1');
  }

  saveArticle(article: Article): Observable<any> {
    return this.secureHttpClientService.post('http://localhost:8080/article/save', article);
  }

  updateArticle(article: Article): Observable<any> {
    return this.secureHttpClientService.post('http://localhost:8080/article/update', article);
  }

  getAllArticles(): Observable<any> {
    return this.secureHttpClientService.get('http://localhost:8080/article/all');
  }

  deleteArticle(article: Article): Observable<any> {
    return this.secureHttpClientService.post('http://localhost:8080/article/delete', article);
  }

  getArticleById(id: number): Observable<Article> {
    return this.secureHttpClientService.get('http://localhost:8080/article/id/' + id);
  }

  getAllArticlesView(): Observable<Articleview[]> {
    return this.secureHttpClientService.get('http://localhost:8080/articleview/all');
  }

}
