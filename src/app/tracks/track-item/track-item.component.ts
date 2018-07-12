import {Component, Input, OnInit} from '@angular/core';
import {Track} from '../../track.model';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.css']
})
export class TrackItemComponent implements OnInit {
  @Input() trackItem: Track;

  constructor() { }

  ngOnInit() {
  }

}
