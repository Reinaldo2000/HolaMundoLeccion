import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  private rutas:Ruta[]=[
    { 
      ciudadorigen: "Machala", 
      ciudaddestino: "Guayaquil", 
      precioruta: 5, 
      descripcion: "Viaje cómodo de 5 horas de Machala al destino final que es Guayaquil ", 
      tipo:"" 
    },
    { 
      ciudadorigen: "Cuenca", 
      ciudaddestino: "Machala", 
      precioruta: 5, 
      descripcion: "Viaje cómodo de 3 horas de Machala al destino final que es Cuenca", 
      tipo:"" 
    },
    { 
      ciudadorigen: "SantaElena", 
      ciudaddestino: "Guayaquil", 
      precioruta: 5, 
      descripcion: "Viaje cómodo de 2 horas de Santa Elena al destino final que es Guayaquil", 
      tipo:"" 
    },
    { 
      ciudadorigen: "Guayaquil", 
      ciudaddestino: "Esmeraldas", 
      precioruta: 5, 
      descripcion: "Viaje cómodo de 3 horas de Guayaquil al destino final que es Esmeraldas", 
      tipo:"" 
    },
    { 
      ciudadorigen: "Zaruma", 
      ciudaddestino: "Machala", 
      precioruta: 5, 
      descripcion: "Viaje cómodo de 2 horas de Zaruma al destino final que es Machala", 
      tipo:"" 
    },
    { 
      ciudadorigen: "Machala", 
      ciudaddestino: "Huertas", 
      precioruta: 5, 
      descripcion: "Viaje cómodo de 2 horas de Machala al destino final que es Huertas", 
      tipo:"" 
    },
    { 
      ciudadorigen: "Quito", 
      ciudaddestino: "Guayaquil", 
      precioruta: 5, 
      descripcion: "Viaje cómodo de 6 horas de Quito al destino final que es Guayaquil", 
      tipo:"" 
    },
    { 
      ciudadorigen: "Playas", 
      ciudaddestino: "SantaElena", 
      precioruta: 5, 
      descripcion: "Viaje cómodo de 1 hora y 30 minutos de Playas al destino final que es Santa Elena", 
      tipo:"" 
    },
    { 
      ciudadorigen: "SantoDomingo", 
      ciudaddestino: "Quito", 
      precioruta: 5, 
      descripcion: "Viaje cómodo de 5 horas de Santo Domingo al destino final que es Quito", 
      tipo:"" 
    },
    { 
      ciudadorigen: "Arenillas", 
      ciudaddestino: "Machala", 
      precioruta: 5, 
      descripcion: "Viaje cómodo de 2 horas y media de Arenillas al destino final que es Machala", 
      tipo:"" 
    }
  ];
  buscar(ciudad: string): number{
    let rg = -1;
    for (let i = 0; i < this.rutas.length; i++){
      if (this.rutas[i].ciudadorigen.toLowerCase() == ciudad.toLowerCase()) {
        rg = i;       
      }
    }
    return rg;
  }

  getRutas(){
    return this.rutas;
  }
  
  getRuta(idx: number):Ruta{
    return this.rutas[idx];
  }

  constructor() { }
}
export interface Ruta{
  ciudadorigen: string;
  ciudaddestino: string;
  precioruta: number;
  descripcion: string;
  tipo: string;
}

