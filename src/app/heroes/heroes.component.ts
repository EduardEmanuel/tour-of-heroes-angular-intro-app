import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes!: Array<Hero>;

  constructor(
    private heroService: HeroService,
  ) {}
  ngOnInit(): void {
    this.initialize();
  }
  initialize(): void {
    this.heroService
      .getHeroes()
      .toPromise()
      .then(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.heroService
      .addHero({ name } as Hero)
      .toPromise()
      .then(hero => this.heroes.push(hero));
  }
  delete(hero: Hero): void {
    this.heroService
      .deleteHero(hero.id)
      .toPromise()
      .then(() => this.heroes = this.heroes.filter(h => h !== hero));
  }
}
