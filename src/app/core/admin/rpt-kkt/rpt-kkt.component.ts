import { Component, OnDestroy, OnInit } from '@angular/core';

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

@Component({
  selector: 'app-rpt-kkt',
  templateUrl: './rpt-kkt.component.html',
  styleUrls: ['./rpt-kkt.component.scss']
})
export class RptKktComponent implements OnInit {

  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      jenis:"Tradisional",
      sumber:"Import bahan mentah",
      kawasan:"",
    },
    {
      jenis:"Tradisional",
      sumber:"Perindustrian",
      kawasan:"",
    },
    {
      jenis:"Moden",
      sumber:"Perniagaan",
      kawasan:"",
    },
    {
      jenis:"Moden",
      sumber:"Perindustrian",
      kawasan:"",
    },
    {
      jenis:"Tradisional",
      sumber:"Pelancongan",
      kawasan:"",
    },
  ];
  SelectionType = SelectionType;

  constructor() {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };
    });
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  ngOnInit() {
  }

}
