import { Component, OnInit } from '@angular/core';
import { TerritoriosService } from '../servicios/territorios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-territorio',
  templateUrl: './territorio.component.html',
  styleUrls: ['./territorio.component.css']
})
export class TerritorioComponent implements OnInit {

  permiso: boolean = false;
  territorio = {
    nombre: '',
    numero: '',
    descripcion: '',
    encargado: ''
  };
  
  id;

  constructor(public _territorios: TerritoriosService, private _route: ActivatedRoute) { 
      this._route.params.subscribe(res => {
          this.id = res['id']
      })
  }

  ngOnInit() {
    this._territorios.perfilTerritorio(`${this.id}`).valueChanges().subscribe((data: any) => {
        data.encargado = data.historial['0'].encargado;
        this.territorio = data
      console.log(data);
      

    })
  }

}
