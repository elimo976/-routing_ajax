import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/albums';
import { AlbumsService } from 'src/app/service/albums.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Detail } from 'src/app/models/detail';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  detail?: Detail[] = []

  constructor(private albumService: AlbumsService, private route: ActivatedRoute){}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("userId"));

    this.albumService.getAlbumById(id)
      .subscribe(dati => {
        this.detail = dati;
      }); 
  }
}