import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service'


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  @Input()
  profiles: Profile[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private profileService: ProfileService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let term = params['term'];
      this.profileService.searchProfiles(term)
        .then(profiles => this.profiles = profiles);
    });
  }

  order(o: string){
    let of;
    if(o=='asc'){
      of = function(a, b) {
        if(a.login < b.login) return -1;
        if(a.login > b.login) return 1;
        return 0;
      };
    }
    else{
      of = function(a, b) {
        if(a.login > b.login) return -1;
        if(a.login < b.login) return 1;
        return 0;};
    }
    this.profiles = this.profiles.sort(of);
  }

  gotoDetail(profile: Profile): void {
    let link = ['/detail', profile.login];
    this.router.navigate(link);
  }
  
  

}
