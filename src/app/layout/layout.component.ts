import { Component, OnInit } from '@angular/core';
import { PlanService } from "../core/services/plan/plan.service";

import { Plan } from "../core/model/plan";
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  planes: Plan[] = []
  count: number = 0
  plan:any = {}

  constructor(
    private planService: PlanService
  ) { }

  ngOnInit(): void {
    this.fetchAll()
  }

  fetchAll() {
    this.planService.getAllPlans().subscribe(planes => {
      console.log(planes['response']['planes'])
      this.planes = planes['response']['planes']
    })
  }

  clickPlan(plan) {
    console.log('sumar al carrito')
    this.plan = plan
    this.count++
    console.log(plan);
  }

  clickCart(ev) {
    console.log('se click cart')
    this.planService.createPlanCard(this.plan).subscribe(addPlan => {
      console.log(addPlan)
    })
  }

}
