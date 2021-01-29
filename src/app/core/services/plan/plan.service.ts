import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plan } from "../../model/plan";

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(
    private http: HttpClient
  ) {}

  getAllPlans() {
    return this.http.get(`http://c1300044.ferozo.com/getListado.php`);
  }

  createPlanCard(data: object) {
    console.log('estoy en create plan cart')
    console.log(data)
    return this.http.get(`http://c1300044.ferozo.com/agregarItem.php?plan=${data.plan}&periodo=${data.periodo}`);
  }

}
