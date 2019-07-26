import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarIdentificationService } from '../../services/car-identification.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  constructor(private router: Router, private carIdentification: CarIdentificationService) { }

  ngOnInit() {
  }

  carNumber: any = '';

  onSubmit() {
    this.carIdentification.addCarNumber(this.carNumber)
    this.router.navigateByUrl('/identification/current-location');
  }
}
