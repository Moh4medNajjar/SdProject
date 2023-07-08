import { Component } from '@angular/core';


export interface tableData {
  demande: string;
  date: string;
  status: string;
}

const ELEMENT_DATA: tableData[] = [
  {demande: "Ouvrir un compte bancaire", date: '06/07/2023', status: 'En cours'},
  {demande: "Ouvrir un compte bancaire", date: '06/07/2023', status: 'Prêt'},
  {demande: "Ouvrir un compte bancaire", date: '06/07/2023', status: 'Rejété'},
  {demande: "Ouvrir un compte bancaire", date: '06/07/2023', status: 'En cours'},
  {demande: "Ouvrir un compte bancaire", date: '06/07/2023', status: 'Prêt'},
  {demande: "Ouvrir un compte bancaire", date: '06/07/2023', status: 'Rejété'},
];

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss'],

})
export class DemandeComponent {

  columns = [

    {
      columnDef: 'demande',
      header: 'Votre Demande',
      cell: (element: tableData) => `${element.demande}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: tableData) => `${element.date}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: tableData) => `${element.status}`,
    },
  ];
  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);

  getStyle(cellValue: any, isLastColumn: boolean): any {
    if (isLastColumn) {

      if (cellValue === 'En cours') {
        return { color: '#DA9C01' };
      } else if (cellValue === 'Prêt') {
        return { color: '#A5BC13' };
      }
      else{
        return {color:'#F90200'};

      }
    }
  }

  getIcon(status: string): string {
    switch (status) {
      case 'Prêt':
        return 'fa-check';
      case 'Rejété':
        return 'fa-times';
        case 'En cours':
        return 'fa-rotate';
      default:
        return '';
    }
  }




}
