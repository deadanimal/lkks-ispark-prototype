import { Component, NgZone, OnDestroy, OnInit, TemplateRef } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import swal from 'sweetalert2';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

@Component({
  selector: 'app-bajet-pembangunan',
  templateUrl: './bajet-pembangunan.component.html',
  styleUrls: ['./bajet-pembangunan.component.scss']
})
export class BajetPembangunanComponent implements OnInit, OnDestroy {

  private chart1: any
  private chart2: any

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

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
      alamat:"Bandar Baru Gua Musang, 18300 Gua Musang, Kelantan Darul Naim",
      status:"1",
      lokasi:"Gua Musang",
    },
    {
      idusahawan: "829842",
      nama: "Taman Layang-layang & Rekreasi PM",
      syarikat: "AJ Landscape Development",
      tarikh: "12/1/2021",
      alamat:"Bandar Baru Gua Musang, 18300 Gua Musang, Kelantan Darul Naim, Malaysia.",
      status:"1",
      lokasi:"Pasir Mas",
    },
    {
      idusahawan: "449022",
      nama: "KBCC",
      syarikat: "LCE Cement",
      tarikh: "26/4/2021",
      alamat:"Bandar Baru Gua Musang, 18300 Gua Musang, Kelantan Darul Naim, Malaysia.",
      status:"2",
      lokasi:"Kota Bharu",
    },
    {
      idusahawan: "980340",
      nama: "Menara Tinggi Kota Bharu",
      syarikat: "Architecture Officer Team (AOT)",
      tarikh: "4/6/2021",
      alamat:"Bandar Baru Gua Musang, 18300 Gua Musang, Kelantan Darul Naim, Malaysia.",
      status:"2",
      lokasi:"Kota Bharu",
    },
    {
      idusahawan: "121993",
      nama: "Taman Tema Air Jeli",
      syarikat: "Sarah A. Consultant",
      tarikh: "1/3/2021",
      alamat:"Bandar Baru Gua Musang, 18300 Gua Musang, Kelantan Darul Naim, Malaysia.",
      status:"1",
      lokasi:"Jeli",
    },
  ];
  SelectionType = SelectionType;

  constructor(private modalService: BsModalService, private zone: NgZone) {
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
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("bp1", am4charts.XYChart3D);

    // Add data
    chart.data = [{
        "country": "Jan",
        "year2017": 3.5,
        "year2018": 4.2
    }, {
        "country": "Feb",
        "year2017": 1.7,
        "year2018": 3.1
    }, {
        "country": "Mac",
        "year2017": 2.8,
        "year2018": 2.9
    }, {
        "country": "Apr",
        "year2017": 2.6,
        "year2018": 2.3
    }, {
        "country": "Mei",
        "year2017": 1.4,
        "year2018": 2.1
    }, {
        "country": "Jun",
        "year2017": 2.6,
        "year2018": 4.9
    }, {
        "country": "Jul",
        "year2017": 6.4,
        "year2018": 7.2
    }, {
        "country": "Ogos",
        "year2017": 8,
        "year2018": 7.1
    }, {
        "country": "Sept",
        "year2017": 9.9,
        "year2018": 10.1
    }, {
        "country": "Okt",
        "year2017": 2.6,
        "year2018": 4.9
    }, {
        "country": "Nov",
        "year2017": 2.8,
        "year2018": 2.9
    }, {
        "country": "Dis",
        "year2017": 8,
        "year2018": 7.1
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Bajet";
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text + "%";
    });

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "year2017";
    series.dataFields.categoryX = "country";
    series.name = "Year 2017";
    series.clustered = false;
    series.columns.template.tooltipText = "Belanjawan: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.9;

    let series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "year2018";
    series2.dataFields.categoryX = "country";
    series2.name = "Year 2018";
    series2.clustered = false;
    series2.columns.template.tooltipText = "Ramalan Bajet: [bold]{valueY}[/]";
    this.chart1 = chart
  }

  getChart2(){
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("bp2", am4charts.XYChart);
    chart.paddingRight = 20;

    // Add data
    chart.data = [{
      "year": "1950",
      "value": -0.307
    }, {
      "year": "1951",
      "value": -0.168
    }, {
      "year": "1952",
      "value": -0.073
    }, {
      "year": "1953",
      "value": -0.027
    }, {
      "year": "1954",
      "value": -0.251
    }, {
      "year": "1955",
      "value": -0.281
    }, {
      "year": "1956",
      "value": -0.348
    }, {
      "year": "1957",
      "value": -0.074
    }, {
      "year": "1958",
      "value": -0.011
    }, {
      "year": "1959",
      "value": -0.074
    }, {
      "year": "1960",
      "value": -0.124
    }, {
      "year": "1961",
      "value": -0.024
    }, {
      "year": "1962",
      "value": -0.022
    }, {
      "year": "1963",
      "value": 0
    }, {
      "year": "1964",
      "value": -0.296
    }, {
      "year": "1965",
      "value": -0.217
    }, {
      "year": "1966",
      "value": -0.147
    }, {
      "year": "1967",
      "value": -0.15
    }, {
      "year": "1968",
      "value": -0.16
    }, {
      "year": "1969",
      "value": -0.011
    }, {
      "year": "1970",
      "value": -0.068
    }, {
      "year": "1971",
      "value": -0.19
    }, {
      "year": "1972",
      "value": -0.056
    }, {
      "year": "1973",
      "value": 0.077
    }, {
      "year": "1974",
      "value": -0.213
    }, {
      "year": "1975",
      "value": -0.17
    }, {
      "year": "1976",
      "value": -0.254
    }, {
      "year": "1977",
      "value": 0.019
    }, {
      "year": "1978",
      "value": -0.063
    }, {
      "year": "1979",
      "value": 0.05
    }, {
      "year": "1980",
      "value": 0.077
    }, {
      "year": "1981",
      "value": 0.12
    }, {
      "year": "1982",
      "value": 0.011
    }, {
      "year": "1983",
      "value": 0.177
    }, {
      "year": "1984",
      "value": -0.021
    }, {
      "year": "1985",
      "value": -0.037
    }, {
      "year": "1986",
      "value": 0.03
    }, {
      "year": "1987",
      "value": 0.179
    }, {
      "year": "1988",
      "value": 0.18
    }, {
      "year": "1989",
      "value": 0.104
    }, {
      "year": "1990",
      "value": 0.255
    }, {
      "year": "1991",
      "value": 0.21
    }, {
      "year": "1992",
      "value": 0.065
    }, {
      "year": "1993",
      "value": 0.11
    }, {
      "year": "1994",
      "value": 0.172
    }, {
      "year": "1995",
      "value": 0.269
    }, {
      "year": "1996",
      "value": 0.141
    }, {
      "year": "1997",
      "value": 0.353
    }, {
      "year": "1998",
      "value": 0.548
    }, {
      "year": "1999",
      "value": 0.298
    }, {
      "year": "2000",
      "value": 0.267
    }, {
      "year": "2001",
      "value": 0.411
    }, {
      "year": "2002",
      "value": 0.462
    }, {
      "year": "2003",
      "value": 0.47
    }, {
      "year": "2004",
      "value": 0.445
    }, {
      "year": "2005",
      "value": 0.47
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.baseValue = 0;

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "year";
    series.strokeWidth = 2;
    series.tensionX = 0.77;

    // bullet is added because we add tooltip to a bullet for it to change color
    let bullet = series.bullets.push(new am4charts.Bullet());
    bullet.tooltipText = "{valueY}";

    bullet.adapter.add("fill", function(fill, target){
      let des = target.dataItem as any;
        if(des.valueY < 0){
            return am4core.color("#FF0000");
        }
        return fill;
    })
    let range = valueAxis.createSeriesRange(series);
    range.value = 0;
    range.endValue = -1000;
    range.contents.stroke = am4core.color("#FF0000");
    range.contents.fill = range.contents.stroke;

    // Add scrollbar
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    chart.cursor = new am4charts.XYCursor();
    this.chart2 = chart
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, {class: "modal-lg"});
  }

  closeModal() {
    this.modal.hide()
  }

  confirm() {
    swal.fire({
      title: "Pengesahan",
      text: "Anda pasti untuk manambah data?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Sah",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Batal"
    }).then((result) => {
      if (result.value) {
        this.register()
      }
    })
  }

  register() {
    swal.fire({
      title: "Berjaya",
      text: "Data telah disimpan!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Tutup"
    }).then((result) => {
      if (result.value) {
        this.modal.hide()
      }
    })
  }

}
