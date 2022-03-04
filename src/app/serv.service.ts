import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  mockdata  = {
    fullName: 'Nakarin Hong-on',
    from: 'Thailand',
    to: 'England',
    type: 'Return',
    adults: 10,
    children: 10,
    infants: 15,
    arrival: new Date(),
    departure: new Date()
  }
  data = Array();
  constructor(){
    this.data.push(this.mockdata)
  }

  adddata =(d:any)=>{
    this.data.push(d);
  }
  
  getdata = () =>{
    return this.data;
  }
}
