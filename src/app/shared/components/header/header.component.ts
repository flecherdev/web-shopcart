import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() count: number
  @Output() cartClicket: EventEmitter<any> = new EventEmitter();
  @Output() searchClicket: EventEmitter<any> = new EventEmitter();
  searchText: string

  constructor() { }

  ngOnInit(): void {
  }

  addCart() {
    this.cartClicket.emit();
  }

  search() {
    this.searchClicket.emit(this.searchText)
  }
}
