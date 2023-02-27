import { Component, OnInit } from '@angular/core';

import listaDeCanciones from 'src/assets/json/songs.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  songs: any = listaDeCanciones;
  name: any
  addItem(newItem: string) {
    this.name = newItem;
    console.log(this.name+"a")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
