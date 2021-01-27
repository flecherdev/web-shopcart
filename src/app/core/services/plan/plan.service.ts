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
}
