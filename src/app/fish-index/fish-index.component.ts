import { Component, OnInit } from '@angular/core';
import { FishIndexService } from './fish-index.service';
import { FishSpecies } from '../shared/fish-species.model';

@Component({
  selector: 'app-fish-index',
  templateUrl: './fish-index.component.html',
  styleUrls: ['./fish-index.component.css'],
  providers: [FishIndexService]
})
export class FishIndexComponent implements OnInit {
  selectedFish: FishSpecies;

  constructor(private fishIndexService: FishIndexService) { }

  ngOnInit() {
    this.fishIndexService.fishSelected.subscribe(
      (fish: FishSpecies) => {
        this.selectedFish = fish;
      }
    );
  }

}
