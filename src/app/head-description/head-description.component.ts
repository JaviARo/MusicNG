import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-description',
  templateUrl: './head-description.component.html',
  styleUrls: ['./head-description.component.scss']
})

export class HeadDescriptionComponent implements OnInit {

  @Output() singers = new EventEmitter<string>();
  searchText:any

  searchSong(value: string) {
    this.singers.emit(value);
    console.log(value)
  }
  // songs: any = listaDeCanciones;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
