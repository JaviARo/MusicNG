import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MusicComponent } from './views/music/music.component';
import { SearchComponent } from './views/search/search.component';
import { VideoComponent } from './views/video/video.component';
import { UserComponent } from './views/user/user.component';
import { ConfigComponent } from './views/config/config.component';
import { AboutComponent } from './views/about/about.component';
import { CancionEntreeComponent } from './views/search/cancion-entree/cancion-entree.component';
import { HeadDescriptionComponent } from './head-description/head-description.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeHeadComponent } from './home-head/home-head.component';
import { FormsModule }   from '@angular/forms';
import { HomeFormComponent } from './home-form/home-form.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { LaneComponent } from './lane/lane.component';
import { SongComponent } from './song/song.component';
import { VideoComponentComponent } from './video-component/video-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MusicComponent,
    SearchComponent,
    VideoComponent,
    UserComponent,
    ConfigComponent,
    AboutComponent,
    CancionEntreeComponent,
    HeadDescriptionComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HomeHeadComponent,
    HomeFormComponent,
    PlaylistsComponent,
    LaneComponent,
    SongComponent,
    VideoComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
