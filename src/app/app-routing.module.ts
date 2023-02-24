import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ConfigComponent } from './views/config/config.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MusicComponent } from './views/music/music.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { RegisterComponent } from './views/register/register.component';
import { SearchComponent } from './views/search/search.component';
import { UserComponent } from './views/user/user.component';
import { VideoComponent } from './views/video/video.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'music', component: MusicComponent},
  { path: 'search', component: SearchComponent },
  { path: 'video', component: VideoComponent },
  { path: 'user', component: UserComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'about', component: AboutComponent },

  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
]; // zona para añadir rutas
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }