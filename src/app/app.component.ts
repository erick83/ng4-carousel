import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = [
    {
      imgUrl: 'assets/bg/a.jpg',
      title: 'Imagen 1',
      subTitle: 'Imagen de Prueba'
    },
    {
    imgUrl: 'assets/1.jpg'
    },
  ];
}
