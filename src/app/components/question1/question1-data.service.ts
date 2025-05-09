import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tree } from './question1.model';
import { map } from 'rxjs/operators';

// API üzerinden verilerin çekilme işlemi

@Injectable({ providedIn: 'root' })
export class Question1DataService {
  private readonly url = 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0/query?where=1%3D1&outFields=*&f=json';

  constructor(private http: HttpClient) {}

  getTrees(): Observable<Tree[]> {
  return this.http.get<any>(this.url).pipe(
    map(res => res.features.map((f: any) => f.attributes))
  );
}
}