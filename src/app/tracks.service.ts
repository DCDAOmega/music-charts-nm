import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TracksService {
  constructor(private httpService: Http) {}

  getTracks() {
    return this.httpService.get( 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks')
      .map(
        (response: Response) => {
          const data = response.json();
          console.log(data.data);
          return data.data;
        }
      );
  }
}
