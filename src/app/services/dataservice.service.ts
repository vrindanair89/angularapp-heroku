import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private client:HttpClient) { }

  
dataInsert(data:any){
  // console.log(data)
  return this.client.post('http://cybersquare.herokuapp.com/user/',data)


}
displayData(){
  return this.client.get('http://cybersquare.herokuapp.com/user/')
}

deleteData(deldata:any){
  const delurl='http://cybersquare.herokuapp.com/user/'+deldata
  return this.client.delete(delurl)
}

}
