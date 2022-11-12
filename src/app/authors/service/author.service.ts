import { Injectable } from '@angular/core';
import {Author} from 'src/app/books/model/book'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

const Url = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  public getAuthorInfo(id: string): Observable<Author> {
    return this.http.get<Author>(Url + 'authors/' + id)
  }
}

