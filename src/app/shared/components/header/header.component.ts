import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() count: number
  @Output() cartClicket: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  addCart() {
    console.log('agregar producto');
    this.cartClicket.emit();
  }
}
