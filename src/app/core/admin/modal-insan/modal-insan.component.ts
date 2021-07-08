import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

@Component({
  selector: 'app-modal-insan',
  templateUrl: './modal-insan.component.html',
  styleUrls: ['./modal-insan.component.scss']
})
export class ModalInsanComponent implements OnInit, OnDestroy {

  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      idusahawan: "218724",
      nama: "Pusat Teknologi Klate",
      syarikat: "Zack Industries",
      tarikh: "3/7/2021",
      jenis:"Utiliti Desa",
      status:"1",
      lokasi:"Gua Musang",
      program:"SPKPN",
      program2:"PPRT",
    },
    {
      idusahawan: "829842",
      nama: "Taman Layang-layang & Rekreasi PM",
      syarikat: "AJ Landscape Development",
      tarikh: "12/1/2021",
      jenis:"Kemudahan Awam",
      status:"1",
      lokasi:"Pasir Mas",
      program:"JPKK",
      program2:"PPRT",
    },
    {
      idusahawan: "449022",
      nama: "KBCC",
      syarikat: "LCE Cement",
      tarikh: "26/4/2021",
      jenis:"JP",
      status:"2",
      lokasi:"Kota Bharu",
      program:"Program Pintar @ KESEDAR",
      program2:"PPP",
    },
    {
      idusahawan: "980340",
      nama: "Menara Tinggi Kota Bharu",
      syarikat: "Architecture Officer Team (AOT)",
      tarikh: "4/6/2021",
      jenis:"JPD",
      status:"2",
      lokasi:"Kota Bharu",
      program:"SPKPN",
      program2:"PLKK",
    },
    {
      idusahawan: "121993",
      nama: "Taman Tema Air Jeli",
      syarikat: "Sarah A. Consultant",
      tarikh: "1/3/2021",
      jenis:"Kemudahan Awam",
      status:"1",
      lokasi:"Jeli",
      program:"Pengurusan Bencana Banjir Banjir Peringkat KESEDAR",
      program2:"PPRT",
    },
  ];
  SelectionType = SelectionType;

  private chart1: any
  private chart2: any

  constructor(private zone: NgZone) { 
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
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chart1) {
          console.log('Chart disposed')
          this.chart1.dispose()
        }
        if (this.chart2) {
          console.log('Chart disposed')
          this.chart2.dispose()
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1()
      this.getChart2()
    })
  }

  getChart1(){
    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("mi1", am4charts.PieChart);

    // Add data
    chart.data = [ {
      "country": "JPKK",
      "litres": 501.9
    }, {
      "country": "Program Pintar @ KESEDAR",
      "litres": 301.9
    }, {
      "country": "SPKPN",
      "litres": 201.1
    }, {
      "country": "Pengurusan Bencana Banjir Peringkat KESEDAR",
      "litres": 165.8
    }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
    this.chart1 = chart
  }

  getChart2(){
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("mi2", am4charts.PieChart);

    // Add data
    chart.data = [ {
      "country": "PPRT",
      "litres": 501.9
    }, {
      "country": "PPP",
      "litres": 165.8
    }, {
      "country": "PLKK",
      "litres": 139.9
    }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
    this.chart2 = chart
  }

}
