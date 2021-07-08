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
  selector: 'app-anak-syarikat',
  templateUrl: './anak-syarikat.component.html',
  styleUrls: ['./anak-syarikat.component.scss']
})
export class AnakSyarikatComponent implements OnInit, OnDestroy {

  private chart1: any
  private chart2: any
  private chart3: any

  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      idusahawan: "218724",
      nama: "Ahmad Zaki",
      syarikat: "Zack Industries",
      tarikh: "3/7/2021",
      alamat:"Bandar Baru Gua Musang, 18300 Gua Musang, Kelantan Darul Naim",
      status:"1",
    },
    {
      idusahawan: "829842",
      nama: "Ainul Jamilah",
      syarikat: "AJ Landscape Development",
      tarikh: "12/1/2021",
      alamat:"Bandar Baru Gua Musang, 18300 Gua Musang, Kelantan Darul Naim, Malaysia.",
      status:"1",
    },
    {
      idusahawan: "449022",
      nama: "Lim Chong Eng",
      syarikat: "LCE Cement",
      tarikh: "26/4/2021",
      alamat:"Bandar Baru Gua Musang, 18300 Gua Musang, Kelantan Darul Naim, Malaysia.",
      status:"2",
    },
    {
      idusahawan: "980340",
      nama: "Eren Yeager",
      syarikat: "Architecture Officer Team (AOT)",
      tarikh: "4/6/2021",
      alamat:"Bandar Baru Gua Musang, 18300 Gua Musang, Kelantan Darul Naim, Malaysia.",
      status:"2",
    },
    {
      idusahawan: "121993",
      nama: "Sarah Alia Samad",
      syarikat: "Sarah A. Consultant",
      tarikh: "1/3/2021",
      alamat:"Bandar Baru Gua Musang, 18300 Gua Musang, Kelantan Darul Naim, Malaysia.",
      status:"1",
    },
  ];
  SelectionType = SelectionType;

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
        if (this.chart3) {
          console.log('Chart disposed')
          this.chart3.dispose()
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1()
      this.getChart2()
      this.getChart3()
    })
  }

  getChart1(){
    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("as1", am4charts.XYChart);

    //

    // Increase contrast by taking evey second color
    chart.colors.step = 2;

    // Add data
    chart.data = generateChartData();

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    // Create series
    function createAxisAndSeries(field, name, opposite, bullet) {
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      if(chart.yAxes.indexOf(valueAxis) != 0){
        valueAxis.syncWithAxis = chart.yAxes.getIndex(0) as any;
      }
      
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.dateX = "date";
      series.strokeWidth = 2;
      series.yAxis = valueAxis;
      series.name = name;
      series.tooltipText = "{name}: [bold]{valueY}[/]";
      series.tensionX = 0.8;
      series.showOnInit = true;
      
      let interfaceColors = new am4core.InterfaceColorSet();
      
      switch(bullet) {
        case "triangle":
          let cuba = series.bullets.push(new am4charts.Bullet());
          cuba.width = 12;
          cuba.height = 12;
          cuba.horizontalCenter = "middle";
          cuba.verticalCenter = "middle";
          
          let triangle = cuba.createChild(am4core.Triangle);
          triangle.stroke = interfaceColors.getFor("background");
          triangle.strokeWidth = 2;
          triangle.direction = "top";
          triangle.width = 12;
          triangle.height = 12;
          break;
        case "rectangle":
          let cubas = series.bullets.push(new am4charts.Bullet());
          cubas.width = 10;
          cubas.height = 10;
          cubas.horizontalCenter = "middle";
          cubas.verticalCenter = "middle";
          
          let rectangle = cubas.createChild(am4core.Rectangle);
          rectangle.stroke = interfaceColors.getFor("background");
          rectangle.strokeWidth = 2;
          rectangle.width = 10;
          rectangle.height = 10;
          break;
        default:
          let bullet = series.bullets.push(new am4charts.CircleBullet());
          bullet.circle.stroke = interfaceColors.getFor("background");
          bullet.circle.strokeWidth = 2;
          break;
      }
      
      valueAxis.renderer.line.strokeOpacity = 1;
      valueAxis.renderer.line.strokeWidth = 2;
      valueAxis.renderer.line.stroke = series.stroke;
      valueAxis.renderer.labels.template.fill = series.stroke;
      valueAxis.renderer.opposite = opposite;
    }

    createAxisAndSeries("visits", "Visits", false, "circle");
    createAxisAndSeries("views", "Views", true, "triangle");
    createAxisAndSeries("hits", "Hits", true, "rectangle");

    // Add legend
    chart.legend = new am4charts.Legend();

    // Add cursor
    chart.cursor = new am4charts.XYCursor();

    // generate some random data, quite different range
    function generateChartData() {
      let chartData = [];
      let firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 100);
      firstDate.setHours(0, 0, 0, 0);

      let visits = 1600;
      let hits = 2900;
      let views = 8700;

      for (var i = 0; i < 15; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        let newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
        hits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
        views += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

        chartData.push({
          date: newDate,
          visits: visits,
          hits: hits,
          views: views
        });
      }
      return chartData;
    }
    this.chart1 = chart
  }

  getChart2(){
    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("as2", am4charts.XYChart);

    // Add data
    chart.data = [{
      "year": "1930",
      "italy": 1,
      "germany": 5,
      "uk": 3
    }, {
      "year": "1934",
      "italy": 1,
      "germany": 2,
      "uk": 6
    }, {
      "year": "1938",
      "italy": 2,
      "germany": 3,
      "uk": 1
    }, {
      "year": "1950",
      "italy": 3,
      "germany": 4,
      "uk": 1
    }, {
      "year": "1954",
      "italy": 5,
      "germany": 1,
      "uk": 2
    }, {
      "year": "1958",
      "italy": 3,
      "germany": 2,
      "uk": 1
    }, {
      "year": "1962",
      "italy": 1,
      "germany": 2,
      "uk": 3
    }, {
      "year": "1966",
      "italy": 2,
      "germany": 1,
      "uk": 5
    }, {
      "year": "1970",
      "italy": 3,
      "germany": 5,
      "uk": 2
    }, {
      "year": "1974",
      "italy": 4,
      "germany": 3,
      "uk": 6
    }, {
      "year": "1978",
      "italy": 1,
      "germany": 2,
      "uk": 4
    }];

    // Create category axis
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.opposite = true;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inversed = true;
    valueAxis.title.text = "Place taken";
    valueAxis.renderer.minLabelPosition = 0.01;

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "italy";
    series1.dataFields.categoryX = "year";
    series1.name = "Italy";
    series1.bullets.push(new am4charts.CircleBullet());
    series1.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
    series1.legendSettings.valueText = "{valueY}";
    series1.visible  = false;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "germany";
    series2.dataFields.categoryX = "year";
    series2.name = 'Germany';
    series2.bullets.push(new am4charts.CircleBullet());
    series2.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
    series2.legendSettings.valueText = "{valueY}";

    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = "uk";
    series3.dataFields.categoryX = "year";
    series3.name = 'United Kingdom';
    series3.bullets.push(new am4charts.CircleBullet());
    series3.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
    series3.legendSettings.valueText = "{valueY}";

    // Add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";


    let hs1 = series1.segments.template.states.create("hover")
    hs1.properties.strokeWidth = 5;
    series1.segments.template.strokeWidth = 1;

    let hs2 = series2.segments.template.states.create("hover")
    hs2.properties.strokeWidth = 5;
    series2.segments.template.strokeWidth = 1;

    let hs3 = series3.segments.template.states.create("hover")
    hs3.properties.strokeWidth = 5;
    series3.segments.template.strokeWidth = 1;

    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.itemContainers.template.events.on("over", function(event){
      let wers = event.target.dataItem.dataContext as any;
      let segments = wers.segments;
      segments.each(function(segment){
        segment.isHover = true;
      })
    })

    chart.legend.itemContainers.template.events.on("out", function(event){
      let srew = event.target.dataItem.dataContext as any;
      let segments = srew.segments;
      segments.each(function(segment){
        segment.isHover = false;
      })
    })
    this.chart2 = chart
  }

  getChart3(){
    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("as3", am4charts.XYChart);

    // Add data
    chart.data = [{
      "ax": 1,
      "ay": 0.5,
      "bx": 1,
      "by": 2.2
    }, {
      "ax": 2,
      "ay": 1.3,
      "bx": 2,
      "by": 4.9
    }, {
      "ax": 3,
      "ay": 2.3,
      "bx": 3,
      "by": 5.1
    }, {
      "ax": 4,
      "ay": 2.8,
      "bx": 4,
      "by": 5.3
    }, {
      "ax": 5,
      "ay": 3.5,
      "bx": 5,
      "by": 6.1
    }, {
      "ax": 6,
      "ay": 5.1,
      "bx": 6,
      "by": 8.3
    }, {
      "ax": 7,
      "ay": 6.7,
      "bx": 7,
      "by": 10.5
    }, {
      "ax": 8,
      "ay": 8,
      "bx": 8,
      "by": 12.3
    }, {
      "ax": 9,
      "ay": 8.9,
      "bx": 9,
      "by": 14.5
    }, {
      "ax": 10,
      "ay": 9.7,
      "bx": 10,
      "by": 15
    }, {
      "ax": 11,
      "ay": 10.4,
      "bx": 11,
      "by": 18.8
    }, {
      "ax": 12,
      "ay": 11.7,
      "bx": 12,
      "by": 19
    }];

    // Create axes
    let valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxisX.title.text = 'X Axis';
    valueAxisX.renderer.minGridDistance = 40;

    // Create value axis
    let valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxisY.title.text = 'Y Axis';

    // Create series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "ay";
    lineSeries.dataFields.valueX = "ax";
    lineSeries.strokeOpacity = 0;

    let lineSeries2 = chart.series.push(new am4charts.LineSeries());
    lineSeries2.dataFields.valueY = "by";
    lineSeries2.dataFields.valueX = "bx";
    lineSeries2.strokeOpacity = 0;

    // Add a bullet
    let bullet = lineSeries.bullets.push(new am4charts.Bullet());

    // Add a triangle to act as am arrow
    let arrow = bullet.createChild(am4core.Triangle);
    arrow.horizontalCenter = "middle";
    arrow.verticalCenter = "middle";
    arrow.strokeWidth = 0;
    arrow.fill = chart.colors.getIndex(0);
    arrow.direction = "top";
    arrow.width = 12;
    arrow.height = 12;

    // Add a bullet
    let bullet2 = lineSeries2.bullets.push(new am4charts.Bullet());

    // Add a triangle to act as am arrow
    let arrow2 = bullet2.createChild(am4core.Triangle);
    arrow2.horizontalCenter = "middle";
    arrow2.verticalCenter = "middle";
    arrow2.rotation = 180;
    arrow2.strokeWidth = 0;
    arrow2.fill = chart.colors.getIndex(3);
    arrow2.direction = "top";
    arrow2.width = 12;
    arrow2.height = 12;

    //add the trendlines
    let trend = chart.series.push(new am4charts.LineSeries());
    trend.dataFields.valueY = "value2";
    trend.dataFields.valueX = "value";
    trend.strokeWidth = 2
    trend.stroke = chart.colors.getIndex(0);
    trend.strokeOpacity = 0.7;
    trend.data = [
      { "value": 1, "value2": 2 },
      { "value": 12, "value2": 11 }
    ];

    let trend2 = chart.series.push(new am4charts.LineSeries());
    trend2.dataFields.valueY = "value2";
    trend2.dataFields.valueX = "value";
    trend2.strokeWidth = 2
    trend2.stroke = chart.colors.getIndex(3);
    trend2.strokeOpacity = 0.7;
    trend2.data = [
      { "value": 1, "value2": 1 },
      { "value": 12, "value2": 19 }
    ];

    //scrollbars
    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarY = new am4core.Scrollbar();
    this.chart3 = chart
  }

}
