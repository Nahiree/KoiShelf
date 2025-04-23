import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  exports:[MenuComponent],
  declarations: [MenuComponent],
  imports: [
    IonicModule.forRoot(),
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
