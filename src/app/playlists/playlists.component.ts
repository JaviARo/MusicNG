import { Component, OnInit } from '@angular/core';

import listaDePlaylists from 'src/assets/json/playlists.json';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  playlists: any = listaDePlaylists;

  constructor() { }

  ngOnInit(): void {
  }

}
