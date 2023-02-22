import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  table:any;

  constructor(public tabla:ApiService){}

  ngOnInit(){
    this.tabla.getTablas().subscribe
    (
      (r) => {this.table = r; console.log(r)},
      (e) => { console.log((e));}
    )
  }
}

