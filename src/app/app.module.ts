import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { TracksComponent } from './tracks/tracks.component';
import { TrackItemComponent } from './tracks/track-item/track-item.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    TrackItemComponent,
    SearchPipe
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
