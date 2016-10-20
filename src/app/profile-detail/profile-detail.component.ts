import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import { FavoritesService } from '../favorites.service'

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  profile: Profile;

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute,
              private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let username = params['username'];
      this.profileService.getProfile(username)
        .then(profile => this.profile = profile);
    });
  }

  addFavorites():void{
    this.favoritesService.add(this.profile);
  }

}
