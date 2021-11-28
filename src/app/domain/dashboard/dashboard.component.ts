import { Component, OnInit } from '@angular/core';
import {EncuestaService} from "../encuesta/encuesta.service";
import DevExpress from "devextreme";
import data = DevExpress.data;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  resumen: any[];

  constructor(
    private service: EncuestaService
  ) { }

  ngOnInit(): void {
    this.getResumen()
  }

  getResumen(){
    this.service.getResumen().subscribe(
      (data => {
        this.resumen = [...data];
        console.log(this.resumen)
      })
    )
  }

  customizeLabel(arg: any) {
    return `${arg.valueText} (${arg.percentText})`;
  }
}
