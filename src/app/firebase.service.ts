import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: AngularFireDatabase) {}

  getParking() {
    return this.db.object('data/parking').valueChanges();
  }
  getPlaces() {
    return this.db.list('data/places').valueChanges();
  }
}
