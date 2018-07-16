import {Artist} from './artist.model';
import {Album} from './album.model';

export class Track {
  constructor(public id: number,
              public title: string,
              public link: string,
              public duration: number,
              public artist: Artist,
              public album: Album) {}
}
