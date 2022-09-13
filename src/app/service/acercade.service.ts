import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acercade } from '../model/acercade';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {
  acercadeURL = 'https://argprobackend.herokuapp.com/acercade/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Acercade[]>{
    return this.httpClient.get<Acercade[]>(this.acercadeURL + 'lista');
  }

  public details(id: number): Observable<Acercade>{
    return this.httpClient.get<Acercade>(this.acercadeURL + `detail/${id}`);
  }

  public save(acercade: Acercade): Observable<any>{
    return this.httpClient.post<any>(this.acercadeURL + 'create', acercade);
  }
  
  public update(id: number, acercade: Acercade): Observable<any>{
    return this.httpClient.put<any>(this.acercadeURL + `update/${id}`, acercade);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.acercadeURL + `delete/${id}`);
  }
}
