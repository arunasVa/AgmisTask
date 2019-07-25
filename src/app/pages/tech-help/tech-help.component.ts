import { Component, OnInit } from '@angular/core';
import { CoordsService } from '../../services/coords.service';

@Component({
  selector: 'app-tech-help',
  templateUrl: './tech-help.component.html',
  styleUrls: ['./tech-help.component.css']
})
export class TechHelpComponent implements OnInit {

  constructor(private coordsService: CoordsService) { }

  ngOnInit() {
    this.getCurrentLocation();
  }

  lat: number;
  lng: number;
  zoom: number = 14;
  
  markers: marker[] = [
    {
      lat: 54.93155671469856,
      lng: 23.939016930224625,
      label: 'A',
      draggable: true
    },
    {
      lat: 54.921174691141715,
      lng: 23.92815934813234,
      label: 'B',
      draggable: false
    }
  ]


  getCurrentLocation() {
    let currentLocation = this.coordsService.getLastCoordinate();
    this.lat = currentLocation.lat;
    this.lng = currentLocation.lng;
  }

}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}