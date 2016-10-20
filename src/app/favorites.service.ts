import { Injectable, EventEmitter } from '@angular/core';
import { Profile } from './profile';

@Injectable()
export class FavoritesService {


  profiles: Profile[] = [];
  favoritesChange: EventEmitter<Profile[]> = new EventEmitter<Profile[]>();

  constructor() { }

  add(profile: Profile):void{
    this.profiles.push(profile);
    this.favoritesChange.next(this.profiles);
  }

  remove(login: string):void{
    this.profiles = this.profiles.filter(function(el) {
      return el.login !== login;
    });
    this.favoritesChange.next(this.profiles);
  }


}
