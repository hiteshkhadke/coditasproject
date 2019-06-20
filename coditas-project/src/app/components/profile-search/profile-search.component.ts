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
  profileItemList = [];


  constructor(private profileSearchService : ProfileSearchService) {
    
    
    
   }
   
   findProfile(){
    this.profileSearchService.updateProfile(this.username);
    this.profileSearchService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;

      this.profile.items.forEach(element => {
        this.profileItemList.push(element);
      });
    });
   }

   findRepository(userName){
    this.profileSearchService.getProfileRepos(userName).subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	})  
   }

  ngOnInit() {
  }

}
