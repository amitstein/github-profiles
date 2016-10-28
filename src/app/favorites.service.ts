import { Injectable, EventEmitter } from '@angular/core';
import { Profile } from './profile';

@Injectable()
export class FavoritesService {


  profiles: Profile[] = [];
  favoritesChange: EventEmitter<Profile[]> = new EventEmitter<Profile[]>();

  constructor() { }

  add(profile: Profile):void{
    if (this.exists(profile.login)){
      throw "Profile already exist";
    }
    this.profiles.push(profile);
    this.favoritesChange.next(this.profiles);
  }

  remove(login: string):void{
    this.profiles = this.profiles.filter((el: Profile) => el.login !== login);
    this.favoritesChange.next(this.profiles);
  }

  exists(login: string):boolean{
    return this.profiles.some((el: Profile) => el.login === login)
  }


}
