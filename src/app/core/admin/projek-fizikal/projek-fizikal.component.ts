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
  selector: 'app-projek-fizikal',
  templateUrl: './projek-fizikal.component.html',
  styleUrls: ['./projek-fizikal.component.scss']
})
export class ProjekFizikalComponent implements OnInit, OnDestroy {

  private chart1: any

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
      jenis:"Utiliti Desa",
      status:"1",
      lokasi:"Gua Musang",
    },
    {
      idusahawan: "829842",
      nama: "Taman Layang-layang & Rekreasi PM",
      syarikat: "AJ Landscape Development",
      tarikh: "12/1/2021",
      jenis:"Kemudahan Awam",
      status:"1",
      lokasi:"Pasir Mas",
    },
    {
      idusahawan: "449022",
      nama: "KBCC",
      syarikat: "LCE Cement",
      tarikh: "26/4/2021",
      jenis:"JP",
      status:"2",
      lokasi:"Kota Bharu",
    },
    {
      idusahawan: "980340",
      nama: "Menara Tinggi Kota Bharu",
      syarikat: "Architecture Officer Team (AOT)",
      tarikh: "4/6/2021",
      jenis:"JPD",
      status:"2",
      lokasi:"Kota Bharu",
    },
    {
      idusahawan: "121993",
      nama: "Taman Tema Air Jeli",
      syarikat: "Sarah A. Consultant",
      tarikh: "1/3/2021",
      jenis:"Kemudahan Awam",
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
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1()
    })
  }

  getChart1(){
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("pf1", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.paddingRight = 30;
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";

    let colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.4;

    chart.data = [ {
      "category": "Module #1",
      "start": "2016-01-01",
      "end": "2016-01-14",
      "color": colorSet.getIndex(0).brighten(0),
      "task": "Gathering requirements"
    }, {
      "category": "Module #1",
      "start": "2016-01-16",
      "end": "2016-01-27",
      "color": colorSet.getIndex(0).brighten(0.4),
      "task": "Producing specifications"
    }, {
      "category": "Module #1",
      "start": "2016-02-05",
      "end": "2016-04-18",
      "color": colorSet.getIndex(0).brighten(0.8),
      "task": "Development"
    }, {
      "category": "Module #1",
      "start": "2016-04-18",
      "end": "2016-04-30",
      "color": colorSet.getIndex(0).brighten(1.2),
      "task": "Testing and QA"
    }, {
      "category": "Module #2",
      "start": "2016-01-08",
      "end": "2016-01-10",
      "color": colorSet.getIndex(2).brighten(0),
      "task": "Gathering requirements"
    }, {
      "category": "Module #2",
      "start": "2016-01-12",
      "end": "2016-01-15",
      "color": colorSet.getIndex(2).brighten(0.4),
      "task": "Producing specifications"
    }, {
      "category": "Module #2",
      "start": "2016-01-16",
      "end": "2016-02-05",
      "color": colorSet.getIndex(2).brighten(0.8),
      "task": "Development"
    }, {
      "category": "Module #2",
      "start": "2016-02-10",
      "end": "2016-02-18",
      "color": colorSet.getIndex(2).brighten(1.2),
      "task": "Testing and QA"
    }, {
      "category": "Module #3",
      "start": "2016-01-02",
      "end": "2016-01-08",
      "color": colorSet.getIndex(4).brighten(0),
      "task": "Gathering requirements"
    }, {
      "category": "Module #3",
      "start": "2016-01-08",
      "end": "2016-01-16",
      "color": colorSet.getIndex(4).brighten(0.4),
      "task": "Producing specifications"
    }, {
      "category": "Module #3",
      "start": "2016-01-19",
      "end": "2016-03-01",
      "color": colorSet.getIndex(4).brighten(0.8),
      "task": "Development"
    }, {
      "category": "Module #3",
      "start": "2016-03-12",
      "end": "2016-04-05",
      "color": colorSet.getIndex(4).brighten(1.2),
      "task": "Testing and QA"
    }, {
      "category": "Module #4",
      "start": "2016-01-01",
      "end": "2016-01-19",
      "color": colorSet.getIndex(6).brighten(0),
      "task": "Gathering requirements"
    }, {
      "category": "Module #4",
      "start": "2016-01-19",
      "end": "2016-02-03",
      "color": colorSet.getIndex(6).brighten(0.4),
      "task": "Producing specifications"
    }, {
      "category": "Module #4",
      "start": "2016-03-20",
      "end": "2016-04-25",
      "color": colorSet.getIndex(6).brighten(0.8),
      "task": "Development"
    }, {
      "category": "Module #4",
      "start": "2016-04-27",
      "end": "2016-05-15",
      "color": colorSet.getIndex(6).brighten(1.2),
      "task": "Testing and QA"
    }, {
      "category": "Module #5",
      "start": "2016-01-01",
      "end": "2016-01-12",
      "color": colorSet.getIndex(8).brighten(0),
      "task": "Gathering requirements"
    }, {
      "category": "Module #5",
      "start": "2016-01-12",
      "end": "2016-01-19",
      "color": colorSet.getIndex(8).brighten(0.4),
      "task": "Producing specifications"
    }, {
      "category": "Module #5",
      "start": "2016-01-19",
      "end": "2016-03-01",
      "color": colorSet.getIndex(8).brighten(0.8),
      "task": "Development"
    }, {
      "category": "Module #5",
      "start": "2016-03-08",
      "end": "2016-03-30",
      "color": colorSet.getIndex(8).brighten(1.2),
      "task": "Testing and QA"
    } ];

    chart.dateFormatter.dateFormat = "yyyy-MM-dd";
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 1, timeUnit: "day" };
    // dateAxis.max = new Date(2018, 0, 1, 24, 0, 0, 0).getTime();
    //dateAxis.strictMinMax = true;
    dateAxis.renderer.tooltipLocation = 0;

    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.height = am4core.percent(70);
    series1.columns.template.tooltipText = "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

    series1.dataFields.openDateX = "start";
    series1.dataFields.dateX = "end";
    series1.dataFields.categoryY = "category";
    series1.columns.template.propertyFields.fill = "color"; // get color from data
    series1.columns.template.propertyFields.stroke = "color";
    series1.columns.template.strokeOpacity = 1;

    chart.scrollbarX = new am4core.Scrollbar();
    this.chart1 = chart
  }
    

}
