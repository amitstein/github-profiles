import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { FavoritesService } from '../favorites.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  profiles: Profile[];
  opened = false;

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.favoritesService.favoritesChange.subscribe(value => { this.profiles = value; })
  }

  open():void{
    this.opened = !this.opened;
  }

  remove(login: string):void{
    this.favoritesService.remove(login)
  }

}
