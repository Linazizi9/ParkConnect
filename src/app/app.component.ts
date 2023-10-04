import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  parking_data!: any;
  places_data!:any[];

  constructor(private firebaseService: FirebaseService) {
    
  }

  ngOnInit() {
    this.firebaseService.getParking().subscribe((parking_data) => {
      this.parking_data = parking_data;
      console.log(this.parking_data)
    });
    this.firebaseService.getPlaces().subscribe((places_data) => {
      this.places_data = places_data;
      console.log(this.places_data)
    });
  }
}
