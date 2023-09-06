import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http: HttpClient) { }

  loadJSON(filePath: string): Observable<any[]> {
    return this.http.get<any[]>(filePath);
  }



  getAlumnoById(filePath: string, id: string): Observable<any | undefined> {
      return this.loadJSON(filePath).pipe(
        map((data: any[]) => data.find(Alumno => Alumno.id === id))
      );
  }
}
