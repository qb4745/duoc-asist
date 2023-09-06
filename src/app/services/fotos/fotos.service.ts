import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor(private http: HttpClient) { }

  loadJSON(filePath: string): Observable<any[]> {
    return this.http.get<any[]>(filePath);
  }



  getStudentById(filePath: string, id: string): Observable<any | undefined> {
      return this.loadJSON(filePath).pipe(
        map((data: any[]) => data.find(student => student.id === id))
      );
  }
}
