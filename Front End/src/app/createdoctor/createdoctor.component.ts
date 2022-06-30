import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Doctor } from '../doctor';
import { Router } from '@angular/router';
import { DoctorRegisistrationServiceService } from '../doctor-regisistration-service.service';


@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent implements OnInit {
  alert:boolean=false

  doctor:Doctor = new Doctor();
  
  message:any;
  constructor(private service:DoctorRegisistrationServiceService) { }

  ngOnInit(): void {
    
  }

  public  saveDoctor(){
    let response = this.service.doDocRegistration(this.doctor);
    response.subscribe((data)=>this.message=data);
    this.alert=true

  }
  closeAlert(){
    this.alert=false
  }




}
