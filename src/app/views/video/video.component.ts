import { Component, OnInit } from '@angular/core';

import listaDeVideos from 'src/assets/json/videos.json';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videos: any = listaDeVideos;
  constructor() { }

  ngOnInit(): void {
  }

}
