import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Profile } from './profile';


@Injectable()
export class ProfileService {

  private github_api = 'https://api.github.com/search/users?q=Daniel Goldberg in:fullname&page=1&per_page=20';  // URL to web api

  constructor(private http: Http) { }

  getProfiles(): Promise<Profile[]> {
    return this.http.get(this.github_api)
      .toPromise()
      .then(response =>
        response.json().items as Profile[]
      )
      .catch(this.handleError);

  }

  getProfile(id: number): Promise<Profile> {
    return this.getProfiles()
      .then(profiles => profiles.find(profile => profile.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
