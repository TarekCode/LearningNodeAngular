import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  myHeroes: Hero[];

  constructor(private heroService: HeroService) {    
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => {
      this.myHeroes = heroes;
    });
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
}

export const mockHeroes: Hero[] = [ 
  new Hero("Superman"),
  new Hero("Batman"),
  new Hero("Spiderman"),
  new Hero("test")
];
