import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {

  term: String;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(): void {
    let link = ['/search', {term: this.term}];
    this.router.navigate(link);
  }

}
