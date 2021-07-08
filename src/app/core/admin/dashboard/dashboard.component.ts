import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  // Chart
  private chart: any
  private chart1: any
  private chart2: any

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chart) {
          console.log('Chart disposed')
          this.chart.dispose()
        }
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
      this.getChart()
      this.getChart1()
      this.getChart2()
    })
  }

  getChart() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdiv", am4charts.XYChart);
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

    this.chart = chart
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdiv1", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "Project 1",
        value: 401
      },
      {
        country: "Project 2",
        value: 300
      },
      {
        country: "Project 3",
        value: 200
      },
      {
        country: "Project 4",
        value: 165
      },
    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;  

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "country";

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    // chart.legend = new am4charts.Legend();
    this.chart1 = chart
  }

  getChart2(){
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("dash1", am4charts.XYChart);

    chart.data = [{
            "year": "2005",
            "income": 23.5,
            "expenses": 18.1
        }, {
            "year": "2006",
            "income": 26.2,
            "expenses": 22.8
        }, {
            "year": "2007",
            "income": 30.1,
            "expenses": 23.9
        }, {
            "year": "2008",
            "income": 29.5,
            "expenses": 25.1
        }, {
            "year": "2009",
            "income": 24.6,
            "expenses": 25
        }];

    //create category axis for years
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;

    //create value axis for income and expenses
    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.opposite = true;


    //create columns
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "year";
    series.dataFields.valueX = "income";
    series.name = "Income";
    series.columns.template.fillOpacity = 0.5;
    series.columns.template.strokeOpacity = 0;
    series.tooltipText = "Income in {categoryY}: {valueX.value}";

    //create line
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryY = "year";
    lineSeries.dataFields.valueX = "expenses";
    lineSeries.name = "Expenses";
    lineSeries.strokeWidth = 3;
    lineSeries.tooltipText = "Expenses in {categoryY}: {valueX.value}";

    //add bullets
    let circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    circleBullet.circle.fill = am4core.color("#fff");
    circleBullet.circle.strokeWidth = 2;

    //add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    //add legend
    chart.legend = new am4charts.Legend();
    this.chart2 = chart
  }

}
