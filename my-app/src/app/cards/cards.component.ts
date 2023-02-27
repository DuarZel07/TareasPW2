import { Component } from '@angular/core';
import { Ienlace } from '../Interfaces/Ienlace';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

//Segundo Componente Cards con los datos
export class CardsComponent {
  //Datos de la primera Card
  Trueachievements= 'Trueachievements';
  descripcionTA='Con Trueachievements Podras ver todas tus estadisticas de Xbox';
  //Datos de la segunda Card
  Exophase="Exophase";
  descripcionEP='Con Exophase Podras ver todas tus estadisticas de PlayStation';
  //Datos de la tercera Card
  HaloW= 'Halo Waypoint';
  descripcionHW= 'Con Halo Waypoint Podras ver todas tus estadisticas de Halo'


  // Enlaces de Ienclade de las paginas de estadisticas
  trueachievements: Ienlace= {
    text:'trueachievements',
    enlace: 'https://www.trueachievements.com/'
  }

  exophase: Ienlace= {
    text:'Exophase',
    enlace: 'https://www.exophase.com/'
  }

  halowaypoint: Ienlace={
    text:'Halo Waypoint',
    enlace: 'https://www.halowaypoint.com/en-US'
  }

  
}
