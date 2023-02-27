import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/classes/user';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent implements OnInit {

  public user: User
  adviceVisible = false;
  constructor(
    private loginService: LoginService,
    public router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  public submit(): void {
    this.loginService.login(this.user).subscribe(
      (data: number) => {
        console.log(this.user.username);
        localStorage.setItem('userName', this.user.username);
        localStorage.setItem('personalToken', `${data}`);
        this.router.navigate(['/music']).then(()=>{window.location.reload();});
      },
      (error: Error) => {
        // console.error("Error al realizar el acceso- login");
        return(this.adviceVisible = true);
      }
    )
  }
}
