import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: 'app-kakitangan-kursus-rawatan',
  templateUrl: './kakitangan-kursus-rawatan.component.html',
  styleUrls: ['./kakitangan-kursus-rawatan.component.scss']
})
export class KakitanganKursusRawatanComponent implements OnInit, OnDestroy {

  private chart1: any
  private chart2: any

  // Table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      kursusid:"231",
      jenis:"Pendidikan",
      lokasi:"Kota Bharu",
      tarikh:"23/6/2021",
      tempoh:"6 bulan",
      masa:"8.30 AM - 5.00 PM",
      jenis2:"Diarhea",
    },
    {
      kursusid:"342367",
      jenis:"Perkahwinan",
      lokasi:"Kota Bharu",
      tarikh:"4/7/2021",
      tempoh:"4 bulan",
      masa:"9.00 AM - 4.00 PM",
      jenis2:"Sakit Mata",
    },
    {
      kursusid:"875643",
      jenis:"Perniagaan",
      lokasi:"Gua Musang",
      tarikh:"12/2/2021",
      tempoh:"4 bulan",
      masa:"8.30 AM - 6.00 PM",
      jenis2:"Vaksin",
    },
    {
      kursusid:"564532",
      jenis:"Keselamatan",
      lokasi:"Pasir Putih",
      tarikh:"25/4/2021",
      tempoh:"12 bulan",
      masa:"6.00 PM - 10.00 PM",
      jenis2:"Batuk",
    },
    {
      kursusid:"342212",
      jenis:"Pendidikan",
      lokasi:"Gua Musang",
      tarikh:"5/5/2021",
      tempoh:"5 bulan",
      masa:"10.00 AM - 12.00 PM",
      jenis2:"Kemalangan",
    },
  ];
  SelectionType = SelectionType;

  constructor(private zone: NgZone) {
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
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("kr1", am4charts.PieChart);

    // Add data
    chart.data = [ {
      "country": "Lithuania",
      "litres": 501.9
    }, {
      "country": "Czechia",
      "litres": 301.9
    }, {
      "country": "Ireland",
      "litres": 201.1
    }, {
      "country": "Germany",
      "litres": 165.8
    }, {
      "country": "Australia",
      "litres": 139.9
    }, {
      "country": "Austria",
      "litres": 128.3
    }, {
      "country": "UK",
      "litres": 99
    }, {
      "country": "Belgium",
      "litres": 60
    }, {
      "country": "The Netherlands",
      "litres": 50
    } ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    this.chart1 = chart
  }

  getChart2(){
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("kr2", am4charts.PieChart);

    // Add data
    chart.data = [ {
      "country": "Lithuania",
      "litres": 501.9
    }, {
      "country": "Czechia",
      "litres": 301.9
    }, {
      "country": "Ireland",
      "litres": 201.1
    }, {
      "country": "Germany",
      "litres": 165.8
    }, {
      "country": "Australia",
      "litres": 139.9
    }, {
      "country": "Austria",
      "litres": 128.3
    }, {
      "country": "UK",
      "litres": 99
    }, {
      "country": "Belgium",
      "litres": 60
    }, {
      "country": "The Netherlands",
      "litres": 50
    } ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    this.chart2 = chart
  }
}
