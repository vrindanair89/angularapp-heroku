import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../services/dataservice.service'
@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css']
})
export class DisplaydetailsComponent implements OnInit {

  constructor(private displayservice:DataserviceService) { }

  ngOnInit(): void {
    this.displayData()
  }
  display:any
displayData(){
  this.displayservice.displayData().subscribe(result=>{
  this.display=result
// console.log(this.display)
  })
}


}
