import { Component, OnInit } from '@angular/core';
import { ProfileSearchService } from '../../services/profile-search.service';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {

  constructor(private profileSearchService : ProfileSearchService) {
    this.profileSearchService.getProfileInfo().subscribe(profile => {
  		console.log(profile);
  	});
   }

  ngOnInit() {
  }

}
