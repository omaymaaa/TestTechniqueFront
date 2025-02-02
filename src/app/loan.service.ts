import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoanService {
  private apiUrl = 'https://localhost:44337/api/loan'; // Remplace par l'URL de ton API

  constructor(private http: Http) { }

  calculateLoan(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/calculate`, data)
      .map(response => response.json());
  }
}
