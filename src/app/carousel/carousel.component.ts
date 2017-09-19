import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @Input() prev_next = true;
  @Input() indicator = false;
  @Input() elementsVisibles = 1;
  @Input() ng4cWidth = '100%';
  @Input() ng4cHeight = '100%';

  @ViewChild('container') container: ElementRef;

  _items: Array<ElementRef>

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._items = this.container.nativeElement.children;
    console.log(this._items);
  }

  hiddenItem(items: Array<ElementRef>, elementsVisibles: number): Array<ElementRef> {
    return;
  }
}
