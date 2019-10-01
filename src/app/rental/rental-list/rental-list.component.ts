import { Component, OnInit } from '@angular/core';
import { RentalService } from  '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  
 rentals: Rental[] = [];

  constructor( private rentalservice : RentalService) { }

  ngOnInit() {
     
    const rentalObservable = this.rentalservice.getRentals();
     
    rentalObservable.subscribe(
      (rentals: Rental[]) =>{
         
        this.rentals =  rentals;
        this.rentals[0].bedrooms;
      },
      (err) =>{
         
      },
      () =>{
         
      }
    );
  }

}
