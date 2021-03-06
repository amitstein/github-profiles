import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { MaterialModule, MdIconRegistry } from '@angular/material';


import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';

import { FavoritesService } from './favorites.service';
import { ProfileService } from './profile.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    ProfileDetailComponent,
    ProfileSearchComponent,
    HomeComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'search',
        component: ProfilesComponent
      },
      {
        path: 'detail/:username',
        component: ProfileDetailComponent
      },
    ])
  ],
  providers: [
    FavoritesService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(mdIconRegistry: MdIconRegistry) {
    mdIconRegistry
        .addSvgIcon('thumb-up', '/icon/assets/thumbup-icon.svg')
        .addSvgIconSetInNamespace('core', '/icon/assets/core-icon-set.svg')
        .registerFontClassAlias('fontawesome', 'fa');
  }
 }
