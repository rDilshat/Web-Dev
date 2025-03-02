import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService, Album } from '../albums.service';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  album: Album | undefined;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(album => this.album = album);
  }

  save(): void {
    if (this.album) {
      this.albumsService.updateAlbum(this.album).subscribe(updatedAlbum => {
        this.album = updatedAlbum;
        alert('Album updated successfully!');
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
