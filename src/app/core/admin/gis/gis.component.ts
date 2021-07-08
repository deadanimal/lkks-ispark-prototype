import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { environment } from "src/environments/environment";
import { MapService } from "src/app/shared/services/map/map.service";

import { Map } from "mapbox-gl";
import * as mapboxgl from "mapbox-gl";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

@Component({
  selector: 'app-gis',
  templateUrl: './gis.component.html',
  styleUrls: ['./gis.component.scss']
})
export class GisComponent implements OnInit {

  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      
      tarikh: "3/7/2021",
      geotag:"Line",
      status:"1",
      lokasi:"Gua Musang",
      masa:"2.43 PM",
    },
    {
      tarikh: "12/1/2021",
      geotag:"Polygon",
      status:"1",
      lokasi:"Pasir Mas",
      masa:"1.07 PM",
    },
    {
      tarikh: "26/4/2021",
      geotag:"Point",
      status:"2",
      lokasi:"Kota Bharu",
      masa:"11.28 AM",
    },
    {
      tarikh: "4/6/2021",
      geotag:"Straight",
      status:"2",
      lokasi:"Kota Bharu",
      masa:"9.32 AM",
    },
    {
      tarikh: "1/3/2021",
      geotag:"Polygon",
      status:"1",
      lokasi:"Jeli",
      masa:"3.20 PM",
    },
  ];
  SelectionType = SelectionType;

  @ViewChild("mapEl", { static: true })
  mapEl: ElementRef<HTMLDivElement>;

  private map: Map;
  
  constructor() { 
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };
    });
  }

  ngOnInit() {
    this.peta();
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

  peta() {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    const INITIAL_VIEW_STATE = {
      latitude: 6.1254,
      longitude: 102.2381,
      zoom: 4,
      maxZoom: 16,
      bearing: 0,
      pitch: 0,
    };

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      // Note: deck.gl will be in charge of interaction and event handling
      interactive: true,
      center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
      zoom: INITIAL_VIEW_STATE.zoom,
      bearing: INITIAL_VIEW_STATE.bearing,
      pitch: INITIAL_VIEW_STATE.pitch,
    });
  }

}
