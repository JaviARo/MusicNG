import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.scss']
})
export class VideoComponentComponent implements OnInit {

  @Input() video: any;
  constructor() { }

  ngOnInit(): void {
  }

}
