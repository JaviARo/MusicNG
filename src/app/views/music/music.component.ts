import { Component, OnInit } from '@angular/core';

import listaDeCanciones from 'src/assets/json/songs.json';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  songs: any = listaDeCanciones;
  constructor() { }

  ngOnInit(): void {
  }

}
