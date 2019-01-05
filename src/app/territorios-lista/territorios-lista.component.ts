import { Component, OnInit } from '@angular/core';
import { TerritoriosService } from '../servicios/territorios.service';

@Component({
  selector: 'app-territorios-lista',
  templateUrl: './territorios-lista.component.html',
  styleUrls: ['./territorios-lista.component.css']
})
export class TerritoriosListaComponent implements OnInit {
  territorios: any[] = [];

  constructor(public _territorios: TerritoriosService) { }

  ngOnInit() {
    this._territorios.mostrarTerritorios();
    this.territorios = this._territorios.territorios
    console.log(this.territorios);
    
          
  }

}
