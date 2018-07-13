import { Pipe, PipeTransform } from '@angular/core';
import {Track} from './track.model';

@Pipe({ name: 'searchPipe' })
export class SearchPipe implements PipeTransform {
  transform(tracks: Track[], searchText: string) {
    return tracks.filter((track) =>
      track.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      || track.artist.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
}
