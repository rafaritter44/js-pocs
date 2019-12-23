import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() public character: { name: string, side: string };

  private swService: StarWarsService;

  public constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  public ngOnInit(): void {
  }

  public onAssign(side: string): void {
    // this.character.side = side;
    // this.sideAssigned.emit({ name: this.character.name, side: side });
    this.swService.onSideChosen({ name: this.character.name, side: side });
  }

}
