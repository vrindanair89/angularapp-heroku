import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // public myname="vrinda"
  // myid="textid"

  // mytestfun=true

  // testfun(){
  //   // console.log("Hai..")
  //   this.mytestfun=false
  // }
  // favcolor:any
  // printfavcolor(){
  //   // console.log(this.favcolor)
  //   this.favcolor="red"
  
  // }

  user=""
  password=""
  message:any
  messagefail:any
  loginfunction(){
    if((this.user=="test") && (this.password=="123"))
    {
      this.message="Login Successfully"
      this.messagefail=""
    }
    else
    {
      this.messagefail="Invalid Login Credentials!!!"
      this.message=""
    }

  }

  displaysettings="false"
}
