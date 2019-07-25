import { Coords } from "./../models/coords.model";

export class CoordsService {

  private coordsArr: Coords[] = [
    { lat: 54.898026, lng: 23.900093 }
  ];

  getLastCoordinate() {
    return this.coordsArr[this.coordsArr.length - 1];
  }

  addCurrentLocation(location: Coords) {
    this.coordsArr.push(location);
  }

}