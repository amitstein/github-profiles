import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import { ProfileService } from './profile.service';
import { FavoritesService } from './favorites.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProfileService, FavoritesService]
})
export class AppComponent {

  title = 'GitHub Profiles';
  profiles: Profile[];

  constructor(private profileService: ProfileService,
              private favoriteService: FavoritesService) { }

  ngOnInit(): void {

  }
}
