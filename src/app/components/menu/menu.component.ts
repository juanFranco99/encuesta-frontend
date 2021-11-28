import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/']
      }, {
        label: 'Dashboard',
        icon: 'pi pi-chart-pie',
        routerLink: ['/dashboard']
      },{
        label: 'Generos',
        icon: 'pi pi-star-fill',
        routerLink: ['/genero']
      }, {
        label: 'Resultados Encuesta',
        icon: 'pi pi-check-square',
        routerLink: ['/encuesta']
      }
    ]
  }

  isVisible(){
    let href = this.router.url;
    return !href.includes('responder');
  }

}
