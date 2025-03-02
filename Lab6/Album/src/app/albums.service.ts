import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { tap } from 'rxjs';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  private albumsCache: Album[] = [];


  constructor(private http: HttpClient) {}

  // getAlbums(): Observable<Album[]> {
  //   return this.http.get<Album[]>(this.apiUrl);
  // }

  getAlbums(): Observable<Album[]> {
    if (this.albumsCache.length > 0) {
      return of(this.albumsCache); // Возвращаем кешированные данные
    }
    return this.http.get<Album[]>(this.apiUrl).pipe(
      tap(albums => this.albumsCache = albums)
    );
  }
  

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/${id}`);
  }

  // updateAlbum(album: Album): Observable<Album> {
  //   return this.http.put<Album>(`${this.apiUrl}/${album.id}`, album);
  // }
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/${album.id}`, album).pipe(
      tap(updatedAlbum => {
        const index = this.albumsCache.findIndex(a => a.id === updatedAlbum.id);
        if (index !== -1) {
          this.albumsCache[index] = updatedAlbum;
        }
      })
    );
  }
  
  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>('https://jsonplaceholder.typicode.com/albums', album);
  }
  
  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
