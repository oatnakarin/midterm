import { Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Flight } from './Flight';
import { Injectable } from '@angular/core';
import { ServService } from './serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent{
  arr = Array();
  title = 'midterm';
  form: FormGroup;
  constructor(private fb: FormBuilder,public service:ServService) {
    this.form = this.fb.group({
      fullname: ['',Validators.required],
      from: ['',Validators.required],
      to: ['',Validators.required],
      type: ['',Validators.required],
      adults : ['',[Validators.required,Validators.min(10),Validators.max(20),Validators.pattern("^[0-9]*$")]],
      children : ['',[Validators.required,Validators.min(10),Validators.max(20),Validators.pattern("^[0-9]*$")]],
      infants : ['',[Validators.required,Validators.min(10),Validators.max(20),Validators.pattern("^[0-9]*$")]],
    });
    this.arr = service.getdata();
  }
  startDate = new FormControl("",Validators.required);
  endDate = new FormControl("",Validators.required);
  adddata = () =>{

    const data = new Flight(
    this.form.value.fullname,
    this.form.value.from,
    this.form.value.to,
    this.form.value.type,
    this.form.value.adults,
    this.startDate.value,
    this.form.value.children,
    this.form.value.infants,
    this.endDate.value
    )
    this.service.adddata(data);
    this.form.reset();
    this.startDate.reset();
    this.endDate.reset();
  }
}
