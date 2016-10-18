import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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
              private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfiles()
      .then(profiles => this.profiles = profiles);
  }

  gotoDetail(profile: Profile): void {
    let link = ['/detail', profile.id];
    this.router.navigate(link);
  }

}
