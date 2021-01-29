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
      this.planes = planes['response']['planes']
    })
  }

  clickPlan(plan) {
    this.plan = plan
    this.count++
    console.log(plan)
  }

  clickCart(ev) {
    this.planService.createPlanCard(this.plan.plan, this.plan.periodo).subscribe(addPlan => {
      console.log(addPlan)
    })
  }

  clickSearch(text) {
    console.log('buscando...')
    let platSearch = []
    if(text){
      const plan = this.planes.find( plan => plan.nombre.search(/text/i) )
      platSearch.push(plan)
      this.planes = platSearch
    } else {
      this.fetchAll()
    }
    
  }

}
