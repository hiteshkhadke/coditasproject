import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileSearchService {

  private username:string;
  constructor(private http:HttpClient) {
    console.log("service is now ready!");
    this.username = 'hiteshkhadke';
   }

   getProfileInfo(){
  	return this.http.get("https://api.github.com/search/users?q=" + this.username);
  	
  }
  getProfileRepos(userName){
  	return this.http.get("https://api.github.com/users/" + userName + "/repos");
  	
  }


  updateProfile(username:string){
  	this.username = username;
  }
}
