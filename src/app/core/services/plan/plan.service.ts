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

  createPlanCard(plan: string, periodo:number) {
    return this.http.get(`http://c1300044.ferozo.com/agregarItem.php?plan=${plan}&periodo=${periodo}`);
  }

  getAllCart() {
    return this.http.get(`http://c1300044.ferozo.com/getListadoCarrito.php`);
  }

  deleteCartItem(id: number) {
    // por una politica de cors no permite usar el metodo delete
    return this.http.delete(`http://c1300044.ferozo.com/removerItem.php?id_producto=${id}`);
  }

}
