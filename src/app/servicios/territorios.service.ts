import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TerritoriosService {

  territorios: Territorio[] = [];

  constructor(private _db: AngularFirestore) { }


  mostrarTerritorios() {
     this._db.collection('territorios').snapshotChanges().subscribe(datos => {

      datos.map(a => {
        
        const data: any = a.payload.doc.data()
        data.id = a.payload.doc.id  

        data.encargado = data.historial['0'].encargado
        data.ultimaVez = new Date(data.historial['0'].hasta.seconds * 1000).toDateString()
        
        this.territorios.push(data);   
    });
    })
  }

  perfilTerritorio(id: string) {

    return this._db.doc(`territorios/${id}`)

  }






}





interface Territorio {
  descripcion: string;
  estado: string;
  historial: HistorialTerritorio[];
  img: string;
  nombre: string;
  numero: number;
}

interface HistorialTerritorio {
  desde: Date;
  encargado: string;
  hasta: Date;
}
