import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {

  constructor(
    public auth: AuthService,
  ) { }

  ngOnInit() {
  }

  logout() {
  this.auth.logoutUser();
}

}

