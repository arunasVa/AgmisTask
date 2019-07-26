import { Component, OnInit } from '@angular/core';
import { CoordsService } from '../../services/coords.service';
import { CarIdentificationService } from 'src/app/services/car-identification.service';
import { TravelMarker, TravelMarkerOptions } from 'travel-marker';
import locationData from './loc.json';

declare var google: any;

@Component({
  selector: 'app-tech-help',
  templateUrl: './tech-help.component.html',
  styleUrls: ['./tech-help.component.css']
})
export class TechHelpComponent implements OnInit {

  constructor(private coordsService: CoordsService, private carIdentificationService: CarIdentificationService) { }

  ngOnInit() {
    this.getCurrentLocation();
    this.getCarIdentification();
  }

  carNumber: any = '';
  techHelp: any = {};

  //initial map possition will be based on last location coords
  lat: number;
  lng: number;
  zoom: number = 14;

  map: any;
  line: any;
  directionsService: any;
  marker: TravelMarker = null;

  // marker movement animation speed
  speedMultiplier = 1;

  onMapReady(map: any) {
    this.map = map;
    this.mockDirections();
  }

  calcRoute() {
    this.line = new google.maps.Polyline({
      strokeOpacity: 0,
      path: [],
      map: this.map
    });

    const start = new google.maps.LatLng(54.92785650312526, 23.93610312914427);
    const end = new google.maps.LatLng(54.915916906612715, 23.92409699042969);
    const request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.BICYCLING
    };
    this.directionsService = new google.maps.DirectionsService();
    this.directionsService.route(request, (response: any, status: any) => {

      if (status == google.maps.DirectionsStatus.OK) {
        var legs = response.routes[0].legs;
        for (let i = 0; i < legs.length; i++) {
          var steps = legs[i].steps;
          for (let j = 0; j < steps.length; j++) {
            var nextSegment = steps[j].path;
            for (let k = 0; k < nextSegment.length; k++) {
              this.line.getPath().push(nextSegment[k]);
            }
          }
        }
        this.initRoute();
      }
    });
  }

  // strokeOpacity 0 because we dont need to see the route
  mockDirections() {
    const locationArray = locationData.map(l => new google.maps.LatLng(l[0], l[1]));
    this.line = new google.maps.Polyline({
      strokeOpacity: 0,
      path: [],
      map: this.map
    });
    locationArray.forEach(l => this.line.getPath().push(l));

    this.initRoute();
  }

  // initialize travel marker and driver info
  initRoute() {
    this.techHelp = {
      name: 'Vardenis',
      surname: 'Pavardenis',
      phone: '+370655555555'
    }

    const route = this.line.getPath().j;

    const options: TravelMarkerOptions = {
      map: this.map,  // map object
      speed: 30,  // default 10 , animation speed
      interval: 10, // default 10, marker refresh time
      speedMultiplier: this.speedMultiplier,
      markerOptions: {
        title: this.techHelp.name + ' ' + this.techHelp.surname,
        animation: google.maps.Animation.DROP,
        icon: {
          url: 'https://i.imgur.com/eTYW75M.png',
          // This marker is 20 pixels wide by 32 pixels high.
          animation: google.maps.Animation.DROP,
          // size: new google.maps.Size(256, 256),
          scaledSize: new google.maps.Size(128, 128),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(53, 110)
        }
      },
    };

    // define marker
    this.marker = new TravelMarker(options);

    // add locations from direction service 
    this.marker.addLocation(route);

    setTimeout(() => this.play(), 2000);
  }

  //starts marker movement animation
  play() {
    this.marker.play();
  }

  getCurrentLocation() {
    let currentLocation = this.coordsService.getLastCoordinate();
    this.lat = currentLocation.lat;
    this.lng = currentLocation.lng;
  }

  getCarIdentification() {
    this.carNumber = this.carIdentificationService.getCarNumber();
  }

}
