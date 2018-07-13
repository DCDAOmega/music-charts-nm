import {Track} from './track.model';
import {Album} from './album.model';
import {Artist} from './artist.model';
import {Injectable, OnInit} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TracksService {
  tracks: Track[] = [new Track(1, 'Test', 'https://test.com',  10, new Artist(1, 'test', 'https://test.com'),
    new Album(1,'testAlbum',
      'https://cdns-images.dzcdn.net/images/artist/aceaee4d98c8d94640a6b2e5a3bdf843/250x250-000000-80-0-0.jpg'))];

  constructor(private httpService: Http) {}

  getTracks() {
    // const headers = new HttpHeaders({'Access-Control-Allow-Origin' : 'http://localhost:4200'});
    return this.httpService.get( 'https://api.deezer.com/chart')
      .map(
        (response: Response) => {
          const data = response.json();
          console.log(data['tracks'].data);
          return data['tracks'].data;
        }
      );
  }
}
