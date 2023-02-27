import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public logout(): void {
    localStorage.removeItem('userName');
    localStorage.removeItem('personalToken');
    this.router.navigate(['/']).then(()=>{window.location.reload();});  
  }

}
