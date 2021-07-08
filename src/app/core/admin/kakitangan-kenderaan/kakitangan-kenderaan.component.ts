import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: 'app-kakitangan-kenderaan',
  templateUrl: './kakitangan-kenderaan.component.html',
  styleUrls: ['./kakitangan-kenderaan.component.scss']
})
export class KakitanganKenderaanComponent implements OnInit {

  // Table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      kenderaanid:"WKA 2356",
      jenis:"Kereta",
      lokasi:"Kota Bharu",
      tarikh:"23/6/2021",
    },
    {
      kenderaanid:"DFW 2123",
      jenis:"Motorsikal",
      lokasi:"Kota Bharu",
      tarikh:"4/7/2021",
    },
    {
      kenderaanid:"DQA 6788",
      jenis:"Kereta",
      lokasi:"Gua Musang",
      tarikh:"12/2/2021",
    },
    {
      kenderaanid:"DED 323",
      jenis:"Lori",
      lokasi:"Pasir Putih",
      tarikh:"25/4/2021",
    },
    {
      kenderaanid:"DFA 8884",
      jenis:"Van",
      lokasi:"Gua Musang",
      tarikh:"5/5/2021",
    },
  ];
  SelectionType = SelectionType;

  constructor() {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
   }

   entriesChange($event) {
    this.entries = $event.target.value;
  }

  clickReset() {
    this.temp = this.rows;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toString().toLowerCase().indexOf(val) !== -1) {
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
