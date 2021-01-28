import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() count: number
  @Output() productClicket: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  addCart() {
    console.log('agregar producto');
    this.productClicket.emit(this.count);
  }
}
