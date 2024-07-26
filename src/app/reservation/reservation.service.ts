import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
 
  private researvations : Reservation[] = [];

  constructor() { 
    this.loadLocalStorage();
  }

  loadLocalStorage(){
    let savedReservations = localStorage.getItem("reservation");
    this.researvations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  //CRUD
  getReservations() : Reservation[]{
    this.loadLocalStorage();
    return this.researvations;
  }

  getReservation(id:string) : Reservation | undefined{
    this.loadLocalStorage();
    return this.researvations.find(res => res.id === id);
  }

  addReservation(reservation :Reservation) : void{
    reservation.id = Date.now().toString();
    this.researvations.push(reservation);
    localStorage.setItem('reservation', JSON.stringify(this.researvations));
  } 

  deleteReservation(id :string) : void | undefined{
    let index  = this.researvations.findIndex(res => res.id === id);
    this.researvations.splice(index , 1);
    localStorage.setItem('reservation', JSON.stringify(this.researvations));
  }

  updateReservation(id:string,updateReservation : Reservation) : void{
    let index  = this.researvations.findIndex(res => res.id === id);
    this.researvations[index] = updateReservation;
    localStorage.setItem('reservation', JSON.stringify(this.researvations));
  }
}
