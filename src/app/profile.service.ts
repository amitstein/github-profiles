import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Profile } from './profile';
import { Repo } from './repo'


@Injectable()
export class ProfileService {

  private github_api_uri = 'https://api.github.com';

  constructor(private http: Http) { }

  searchProfiles(term: string): Promise<Profile[]> {
    return this.http.get(this.github_api_uri + '/search/users?q= ' + term +  ' in:login%2Bfullname&page=1&per_page=20')
      .toPromise()
      .then(response =>
        response.json().items as Profile[]
      )
      .catch(this.handleError);

  }

  getProfile(username: string): Promise<Profile> {
    return this.http.get(this.github_api_uri + '/users/' + username)
      .toPromise()
      .then(response =>
        response.json() as Profile
      )
      .catch(this.handleError);
  }

  getRepos(username: string): Promise<Repo[]> {
    return this.http.get(this.github_api_uri + '/users/' + username + '/repos')
      .toPromise()
      .then(response =>
        response.json() as Repo[]
      )
      .catch(this.handleError);
  }

  getFollowing(username: string): Promise<Profile[]> {
    return this.http.get(this.github_api_uri + '/users/' + username + '/following')
      .toPromise()
      .then(response =>
        response.json() as Profile[]
      )
      .catch(this.handleError);
  }

  getFollowers(username: string): Promise<Profile[]> {
    return this.http.get(this.github_api_uri + '/users/' + username + '/followers')
      .toPromise()
      .then(response =>
        response.json() as Profile[]
      )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
