import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { TracksComponent } from './tracks/tracks.component';
import { TrackItemComponent } from './tracks/track-item/track-item.component';
import {Http, HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';
import { TrackDetailComponent } from './tracks/track-item/track-detail/track-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    TrackItemComponent,
    SearchPipe,
    TrackDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
