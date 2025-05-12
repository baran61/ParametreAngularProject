import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Tree } from '../models/tree-model/tree.model';

@Injectable({ providedIn: 'root' })
export class TreeDataService {
  private API = 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0/query';

  constructor(private http: HttpClient) {}

  getTrees(): Observable<Tree[]> {
    const params = new HttpParams()
      .set('where', '1=1')         // tüm kayıtları getir
      .set('outFields', '*')       // tüm alanları getir
      .set('f', 'json');           // JSON çıktısı

    return this.http.get<any>(this.API, { params }).pipe(
      map(res => res.features.map((f: any) => f.attributes as Tree))
    );
  }
}