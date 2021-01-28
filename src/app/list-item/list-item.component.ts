import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter  } from '@angular/core';

import { Plan } from "../core/model/plan";
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @ViewChild('planesTable', {static: false}) table: MatTable<Plan>;

  @Input() planes: Plan[] = []
  @Output() planClicket: EventEmitter<any> = new EventEmitter();
  selectPeriodo: String

  displayedColumns: string[] = [
    'nombre',
    'plan',
    'periodos',
    'actions'
  ];

  constructor(
  ) { }

  ngOnInit(): void {
    
  }

  addProduct(plan){
    const alCarrito = {
      plan: plan.plan,
      periodo: this.selectPeriodo
    }
    this.planClicket.emit(alCarrito);
  }
  

}
