import { CarIdentification } from "./../models/car-identification.model";

export class CarIdentificationService {

  private carNumberArr: CarIdentification[] = [

  ];

  getCarNumber() {
    return this.carNumberArr[this.carNumberArr.length - 1];
  }

  addCarNumber(number: CarIdentification) {
    this.carNumberArr.push(number);
  }

}