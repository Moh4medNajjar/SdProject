import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss'],

})
export class DemandeComponent {
  
  let tableData: TableData[] = [{
    demande: "Ouvrir un compte bancaire",
    date: "06/07/2023",
    status: "En cours"
  }];
}
