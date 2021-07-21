import { Component, OnInit } from '@angular/core';

import {Register} from './registration.model';

import {DataserviceService} from '../services/dataservice.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private dataservice:DataserviceService) { }

  ngOnInit(): void {
  }


res=new Register()
message:any

insertData(){
  this.dataservice.dataInsert(this.res).subscribe(result=>{
    // console.log(result)
    this.message=result
    // this.displayData()
  }) 
}


}
