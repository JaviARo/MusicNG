import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-description',
  templateUrl: './head-description.component.html',
  styleUrls: ['./head-description.component.scss']
})
export class HeadDescriptionComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
