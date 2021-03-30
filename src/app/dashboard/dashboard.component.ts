import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Array<Hero> = [];

  constructor(
    private heroService: HeroService,
  ) { }
  ngOnInit(): void {
    this.initialize();
  }
  initialize(): void {
    this.heroService
      .getHeroes()
      .toPromise()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }

}