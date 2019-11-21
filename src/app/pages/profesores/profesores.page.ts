import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.page.html',
  styleUrls: ['./profesores.page.scss'],
})
export class ProfesoresPage implements OnInit {

  profesores;
  textoBuscar = '';
  a:number = 10;
  constructor(private datos:DataService) { }

  ngOnInit() {

    this.datos.getDocentes(this.a)
    .subscribe(docentes => {
      this.profesores = docentes;
    })
  }


  buscar(event){
    this.textoBuscar = event.detail.value; 
  }

  loadData(event){
    
    console.log('Cargando.......');

    setTimeout(()=> {
      
     this.datos.getDocentes(this.a+=10)
      .subscribe(docentes => {
        this.profesores = docentes;
      })
      console.log(this.profesores);
       event.target.complete();
  
     },200);

  }

}
