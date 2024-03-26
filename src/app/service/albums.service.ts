import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/albums';
import { Detail } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private url = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url +"/albums")
  }

  getAlbumById(albumNumId: number): Observable<Detail[]>{
    return this.http.get<Detail[]>(this.url + "/photos?albumId=" + albumNumId)
  }
}
