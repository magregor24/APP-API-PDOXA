import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { IonSlides, IonButton } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  @ViewChild('slides') slides:IonSlides;
  @ViewChild('btn') btn:IonButton;
  id;
  usuario;
  cedula;
  
  constructor(private route:ActivatedRoute, 
              private router:Router, 
              private data:DataService) {
    
    this.route.queryParams.subscribe(params =>{
      this.id = params.id;
      this.usuario = params.usuario;
      this.cedula = params.cedula;
    
    })
  }
  
  ngOnInit() {}

  slide(){
    
    this.router.navigate(['/principal']);
  }

 
  verHorario(){

    let NavigationExtras:NavigationExtras = {
      queryParams:{
        id: this.id
      }
    }
    this.router.navigate(['/horarios'],NavigationExtras);

  }


  cambio(){
   
    this.slides.getActiveIndex().then(index => {
      console.log('dentro cambio',index);
      this.data.id$.emit(index);

   });

   

 
    
  }

  
}
