import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { IonMenu, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ViewChild('menu') menu:IonMenu;
  id = 0;
  id2;
  color;
  u;
  constructor(private route:ActivatedRoute, 
              public router:Router,
              private data:DataService) {
              
              this.route.queryParams.subscribe(params =>{
                this.id2 = params.id;
              })
    
   }

  ngOnInit() {

    this.data.id$.subscribe(p =>{
      this.id = p;
    })

    this.data.getDocentesId(this.id2).subscribe(p=>{
        ///////////////////////////////malo corrrige
      this.color = p.filter(p=>{
        return p['lapsoAcademico'] == '2016-2';
      })
      
    })


    this.u = this.color.pop();

   
  
    
  }


  click(){
   
    this.router.navigate(['/inicio']);
    
  }

 modalPag(event){
   console.log(event.target.innerText);

  let Navi:NavigationExtras = {
    queryParams:{
      id: this.id2,
      dia:event.target.innerText
    }
  }
  this.router.navigate(['/modal'],Navi);
    
}



}
