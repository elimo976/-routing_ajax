import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/albums';
import { AlbumsService } from 'src/app/service/albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Album[] =[]

  constructor(private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.albumService.getAlbums()
      .subscribe(dati => {
        this.albums = dati;
      });
  }
}