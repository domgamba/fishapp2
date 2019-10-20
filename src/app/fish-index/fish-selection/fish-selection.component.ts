import { Component, OnInit, Input } from '@angular/core';
import { FishSpecies } from 'src/app/shared/fish-species.model';

@Component({
  selector: 'app-fish-selection',
  templateUrl: './fish-selection.component.html',
  styleUrls: ['./fish-selection.component.css']
})
export class FishSelectionComponent implements OnInit {
  @Input() fish: FishSpecies;
  constructor() { }

  ngOnInit() {
  }

}
