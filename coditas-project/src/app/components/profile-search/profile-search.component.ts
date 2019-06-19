import { Component, OnInit } from '@angular/core';
import { ProfileSearchService } from '../../services/profile-search.service';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {
  profile : any;
  username:string;
  repos: any;


  constructor(private profileSearchService : ProfileSearchService) {
    
    
    
   }
   
   findProfile(){
    this.profileSearchService.updateProfile(this.username);
    this.profileSearchService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
   }

   findRepository(){
    this.profileSearchService.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	})  
   }

  ngOnInit() {
  }

}
