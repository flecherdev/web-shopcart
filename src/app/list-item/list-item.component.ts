import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter  } from '@angular/core';
import { Plan } from "../core/model/plan";
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import { PlanService } from '../core/services/plan/plan.service';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @ViewChild('planesTable', {static: false}) table: MatTable<Plan>;

  @Input() planes: Plan[] = []
  @Output() planClicket: EventEmitter<any> = new EventEmitter();
  selectPeriodo: {}

  displayedColumns: string[] = [
    'nombre',
    'plan',
    'periodos',
    'actions'
  ];

  constructor(
    private planService: PlanService
  ) { }

  ngOnInit(): void {
    this.selectPeriodo = ''
  }

  addProduct(plan){
    const alCarrito = {
      plan: plan.plan,
      periodo: this.selectPeriodo
    }
    this.planClicket.emit(alCarrito);
    this.selectPeriodo = ''
    this.fetchAll()
  }

  clickPeriodo(periodo){
    console.log(periodo)
    this.selectPeriodo = periodo.periodo
  }

  fetchAll() {
    this.planService.getAllPlans().subscribe(planes => {
      console.log(planes['response']['planes'])
      this.planes = planes['response']['planes']
    })
  }

  

}
