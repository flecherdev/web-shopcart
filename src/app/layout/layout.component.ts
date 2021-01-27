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
}
