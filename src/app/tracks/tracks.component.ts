import {Component, OnChanges, OnInit} from '@angular/core';
import {Track} from '../track.model';
import {TracksService} from '../tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css'],
  providers: [TracksService]
})
export class TracksComponent implements OnInit {
  searchString = '';
  sortAlpha = false;
  filterIsDisabled = false;
  tracks: Track[] = [];

  constructor(private tracksService: TracksService) { }

  ngOnInit() {
    this.onGetTracks();
  }

  sortTracks() {
    if(this.sortAlpha){
      this.onGetTracks();
    }
  }

  onGetTracks(){
    this.filterIsDisabled = true;
    this.tracksService.getTracks()
      .subscribe(

        (tracks: any[]) => {
          this.tracks = tracks;
          this.filterIsDisabled = false;
        },
        (error) => console.log(error)
      );
  }
}
