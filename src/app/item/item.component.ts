import { Component, OnInit, Input } from '@angular/core';
import { CarouselData } from '../interfaces/carousel-data';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() img: string;

  constructor() { }

  ngOnInit() {
  }

}
