import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PasswordPage } from './password.page'; // o el nombre correcto


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule, // ✅ necesario para <ion-label>, <ion-input>, etc.
    RouterModule.forChild([{ path: '', component: PasswordPage }])
  ],
  declarations: [PasswordPage]
})
export class PasswordPageModule { }

