// src/app/services/messaging.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendMessage(message: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/messages`, message);
  }

  getChatPreviews(token: string, paramValue: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const params = new HttpParams().set('userId', paramValue);

    return this.http.get<any[]>(`${this.apiUrl}/chat/previews`, { headers, params });
  }

  getMessages(token: string, paramValue: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any[]>(`${this.apiUrl}/chat/messages/${paramValue}`, { headers });
  }
}
