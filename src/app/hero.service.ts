import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { mockHeroes } from './heroes/heroes.component';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(mockHeroes);
  }
}