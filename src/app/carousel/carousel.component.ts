import { Component, OnInit, Input } from '@angular/core';
import { CarouselData } from '../interfaces/carousel-data';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() data: Array<CarouselData> = [
    {
    imgUrl: 'assets/1.jpg'
    },
    {
    imgUrl: 'assets/1.jpg'
    },    
  ];
  
  @Input() prev_next: false;
  @Input() indicator: false;
  @Input() cant: 1;
  
  constructor() { }

  ngOnInit() {
  }
}
