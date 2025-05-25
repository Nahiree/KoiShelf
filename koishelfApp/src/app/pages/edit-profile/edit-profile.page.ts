import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone:false
})
export class EditProfilePage implements OnInit {

  constructor(
      public auth: AuthService,
    ) { }
  
    ngOnInit() {
    }
  
    logout() {
    this.auth.logoutUser();
  }
}
