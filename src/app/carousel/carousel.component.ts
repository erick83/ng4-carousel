import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() prev_next = false;
  @Input() indicator = false;
  @Input() elements = 1;
  @Input() ng4cWidth = '100%';
  @Input() ng4cHeight = '100%';

  constructor() { }

  ngOnInit() {
  }
}
