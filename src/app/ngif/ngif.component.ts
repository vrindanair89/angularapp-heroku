import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


displayhome=true
displaycontact=false
displayabout=false
displaygallery=false



homefunction(){
this.displayhome=true
this.displaycontact=false
this.displaygallery=false
this.displayabout=false

}
galleryfunction(){
  this.displayhome=false
  this.displaycontact=false
  this.displaygallery=true
  this.displayabout=false
  
}
contactfunction(){
    this.displayhome=false
    this.displaycontact=true
    this.displaygallery=false
    this.displayabout=false
    
}
aboutfunction(){
      this.displayhome=false
      this.displaycontact=false
      this.displaygallery=false
      this.displayabout=true
    
}


optionselected:any

studentlist=[
  {'name':'aaa','place':'Calicut','contact':'111'},
  {'name':'bbb','place':'Malappuram','contact':'222'},
  {'name':'ccc','place':'Thrissur','contact':'333'},
  {'name':'ddd','place':'Trivandrum','contact':'444'},
]

deletefun(x:any){
  this.studentlist.splice(x,1)
}

}