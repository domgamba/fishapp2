import { Component, OnInit } from '@angular/core';
import { FishSpecies } from 'src/app/shared/fish-species.model';
import { FishIndexService } from '../fish-index.service';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css'],
  providers: [FishIndexService]
})
export class FishListComponent implements OnInit {
  fish: FishSpecies[];

  constructor(private fishIndexService: FishIndexService) { }

  ngOnInit() {
    this.fish = this.fishIndexService.getFishSpecies();
  }

}
