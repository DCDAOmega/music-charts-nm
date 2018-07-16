import { Pipe, PipeTransform } from '@angular/core';
import {Track} from './track.model';

@Pipe({ name: 'searchPipe' })
export class SearchPipe implements PipeTransform {
  transform(tracks: Track[], searchText: string, sortAlpha: boolean) {
    if(sortAlpha){
      tracks = tracks.sort(
        (a: Track, b: Track) => {
          if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          } else {
            return 0;
          }
        });
    }
    return tracks.filter((track) =>
      track.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      || track.artist.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
}
