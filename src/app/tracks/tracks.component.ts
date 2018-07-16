import { Component, OnInit } from '@angular/core';
import {Track} from '../track.model';
import {Album} from '../album.model';
import {Artist} from '../artist.model';
import {TracksService} from '../tracks.service';
import {Response} from '@angular/http';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css'],
  providers: [TracksService]
})
export class TracksComponent implements OnInit {
  searchString = '';
  tracks: Track[] = [];

  constructor(private tracksService: TracksService) { }

  ngOnInit() {
    this.tracksService.getTracks()
      .subscribe(
      (tracks: any[]) => this.tracks = tracks,
      (error) => console.log(error)
    );
  }
}
