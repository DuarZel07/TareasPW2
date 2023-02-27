import { Component } from '@angular/core';
// import { text } from 'stream/consumers';
import { Ienlace } from './Interfaces/Ienlace';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Primer Componente NavBar Datos
export class AppComponent {
  //Titulo de la Pagina
  title = 'My Time On It';
  
  //Enlaces de la interface de Ienlace de las Stores
  Xbox: Ienlace= {
    text: 'Xbox',
    enlace: 'https://www.xbox.com/en-US/'
  }
  Psn: Ienlace= {
    text: 'PlayStation',
    enlace: 'https://www.playstation.com/en-us/'
  }

}




