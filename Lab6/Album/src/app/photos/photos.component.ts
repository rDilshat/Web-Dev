import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-photos',
  imports: [CommonModule, RouterModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {
  photos: any[] = [];
  albumId: number = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos`)
      .subscribe(data => this.photos = data);
  }
}
