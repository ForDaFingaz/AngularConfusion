import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})

export class DishService {

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]> {
    /*return of(DISHES).pipe(delay(500));*/
    return this.http.get<Dish[]>(BaseURL + 'dishes')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDish(id: string): Observable<Dish> {
    /* return of(DISHES.filter((dish) => (dish._id === id))[0]).pipe(delay(500)); */
    return this.http.get<Dish>(BaseURL + 'dishes/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedDish(): Observable<Dish> {
    /*return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(500)); */
    return this.http.get<Dish>(BaseURL + 'dishes?featured=true')
      .pipe(map(dishes => dishes[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDishIds(): Observable<string[] | any> {
    /* return of(DISHES.map(dish => dish._id )); */
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish._id)))
    .pipe(catchError(error => error));
  }

  postComment(dishId: string, comment: any) {
    return this.http.post(BaseURL + 'dishes/' + dishId + '/comments', comment)
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  putDish(dish: Dish): Observable<Dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Dish>(BaseURL + 'dishes/' + dish._id, dish, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

}


