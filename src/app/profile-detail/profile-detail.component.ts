import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Profile } from '../profile';
import { Repo } from '../repo';
import { ProfileService } from '../profile.service';
import { FavoritesService } from '../favorites.service'

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  profile: Profile;
  repos: Repo[];
  following: Profile[];
  followers: Profile[];

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute,
              private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let username = params['username'];
      this.profileService.getProfile(username)
        .then(profile => this.profile = profile);
      this.profileService.getFollowers(username)
        .then(followers => this.followers = followers);
      this.profileService.getFollowing(username)
        .then(following => this.following = following);
      this.profileService.getRepos(username)
        .then(repos => this.repos = repos);
    });
  }

  addToFavorites():void{
    this.favoritesService.add(this.profile);
  }

}
