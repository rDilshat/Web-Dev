import { Component } from '@angular/core';
import { AlbumsService, Album} from '../albums.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-albums',
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
  standalone: true
})
export class AlbumsComponent{
  albums: Album[] = [];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(data => this.albums = data);
  }

  createAlbum(): void {
    const newAlbum: Album = {
      userId: 1,
      id: this.albums.length + 1,
      title: 'New Album'
    }
    this.albumsService.createAlbum(newAlbum).subscribe(album=>{
      this.albums.push(album);
    })
  };

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}
