import { Injectable, EventEmitter} from '@angular/core';

import { FishSpecies } from '../shared/fish-species.model';


@Injectable({
  providedIn: 'root'
})
export class FishIndexService {
  fishSelected = new EventEmitter<FishSpecies>();

  private fish: FishSpecies[] = [
    new FishSpecies('Red Tail Shark', 'Freshwater', 6, 90, 'Moderate'),
    new FishSpecies('German Ram', 'Freshwater', 3, 50, 'Difficult'),
    new FishSpecies('Neon Tetra', 'Freshwater', 2, 5, 'Easy'),
    new FishSpecies('Discus', 'Freshwater', 11, 40, 'Very Difficult'),
    new FishSpecies('Ocellaris Clownfish', 'Saltwater', 4, 50, 'Easy'),
  ];

  getFishSpecies() {
    return this.fish.slice();
  }
  constructor() { }
}
