import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
     private router: Router,
     private snackBar: MatSnackBar
     ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401 || err.status === 403) {
        this.authService.logout();
        if (
          !(this.router.isActive('users/resetpassword', false)
            ||
            this.router.isActive('/users/password/reset', false))
        ) {
          this.router.navigateByUrl('users/login').then();
        }
      }
      if(err.status != 403){
        this.snackBar.open(err.error.message, "Ok", {duration: 5000});
      }
      
      return throwError(err);
    }));
  }

}
