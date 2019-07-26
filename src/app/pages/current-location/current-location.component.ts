import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { CoordsService } from '../../services/coords.service';
import { CarIdentificationService } from '../../services/car-identification.service';

@Component({
  selector: 'app-current-location',
  templateUrl: './current-location.component.html',
  styleUrls: ['./current-location.component.css']
})
export class CurrentLocationComponent implements OnInit {

  constructor(private coordsService: CoordsService, private carIdentificationService: CarIdentificationService) {
  }

  ngOnInit() {
    this.getCarIdentification();
    this.currentLocation();
  }

  carNumber: any = '';

  // initial location and map zoom level
  lat: number = 54.898026;
  lng: number = 23.900093;
  zoom: number = 16;

  currentLocationMarker: marker =
    {
      lat: this.lat,
      lng: this.lng,
      label: '',
      draggable: true
    }

  protected map: any;

  protected mapReady(map: any) {
    this.map = map;
  }

  //change initial location when geolocotion is allowed
  currentLocation() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.currentLocationMarker.lng = +pos.coords.longitude;
        this.currentLocationMarker.lat = +pos.coords.latitude;
        this.centerToCurrentLocation(this.currentLocationMarker.lat, this.currentLocationMarker.lng);
        this.saveCurrentLocation(this.currentLocationMarker.lat, this.currentLocationMarker.lng);
      });
    } else {
      alert("Ši naršyklė nepalaiko vietos nustatymo funkcijos.");
    }
  }

  //center map view after geolocation allowed
  centerToCurrentLocation(lat: number, lng: number) {
    this.map.setCenter({ lat: lat, lng: lng });
  }

  //save new location to coordsService
  saveCurrentLocation(lat: number, lng: number) {
    let currentLoc = { lat: lat, lng: lng }
    this.coordsService.addCurrentLocation(currentLoc);
  }

  getCarIdentification() {
    this.carNumber = this.carIdentificationService.getCarNumber();
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    this.saveCurrentLocation($event.coords.lat, $event.coords.lng);
    console.log('event : ', $event.coords.lat, $event.coords.lng)
  }

}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}