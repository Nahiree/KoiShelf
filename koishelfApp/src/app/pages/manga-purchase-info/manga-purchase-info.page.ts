import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-manga-purchase-info',
  templateUrl: './manga-purchase-info.page.html',
  styleUrls: ['./manga-purchase-info.page.scss'],
  standalone: false,
})
export class MangaPurchaseInfoPage implements OnInit {
   id: any; //variable para recibir el id
  data: any; //variable para recibir toda la información del id
  constructor(
    public activatedRoute: ActivatedRoute,
    public db: DatabaseService,
    //public cdr: ChangeDetectorRef
  ) { 
    console.log('¡Constructor de MangaPurchaseInfoPage ejecutado!');
  }

  ngOnInit() {
    
    console.log('mangaID', this.activatedRoute.snapshot.paramMap.get('mangaId'));
    this.id = this.activatedRoute.snapshot.paramMap.get('mangaId');
    this.db.getDocumentById('manga', this.id)
      .subscribe((res: any) => {
        console.log('manga recuperado', res);
        this.data = res;
       //this.cdr.detectChanges();
      })
      
  }

}
