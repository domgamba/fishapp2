import { Component, OnInit, Input, Output} from '@angular/core';

import { FishSpecies } from 'src/app/shared/fish-species.model';
import { FishIndexService } from '../../fish-index.service';

@Component({
  selector: 'app-fish-list-item',
  templateUrl: './fish-list-item.component.html',
  styleUrls: ['./fish-list-item.component.css'],
  providers: [FishIndexService],
})
export class FishListItemComponent implements OnInit {
  @Input() fish: FishSpecies;


  constructor(private fishIndexService: FishIndexService) { }

  ngOnInit() {
  }

    onSelected() {
      this.fishIndexService.fishSelected.emit(this.fish);
      console.log(this.fishIndexService.fishSelected);
    }
}
