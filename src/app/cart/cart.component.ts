import { Component, OnInit, ViewChild } from '@angular/core';
import { Plan } from "../core/model/plan";
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Cart } from "../core/model/cart";
import { PlanService } from "../core/services/plan/plan.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  carts: Cart [] = []
  @ViewChild('cartTable', { static: false }) table: MatTable<Plan>;
  showSpinner = true;

  displayedColumns: string[] = [
    'id_producto',
    'nombre',
    'plan',
    'valor',
    'periodo',
    'actions'
  ];

  constructor(
    private planService: PlanService
  ) { }

  ngOnInit(): void {
    this.fetchAll()
  }

  fetchAll() {
    this.planService.getAllCart().subscribe(carts => {
      this.carts = carts['response']
      this.showSpinner = false;
    })
  }

  delete(cart){
    console.log(cart)
    this.planService.deleteCartItem(cart.id_producto).subscribe( cart => {
      console.log(cart)
      this.fetchAll()
    })
  }

}
