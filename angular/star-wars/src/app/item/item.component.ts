import { Component, Input } from '@angular/core';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() public character: { name: string, side: string };

  public constructor(private swService: StarWarsService) {}

  public onAssign(side: string): void {
    // this.character.side = side;
    // this.sideAssigned.emit({ name: this.character.name, side: side });
    this.swService.onSideChosen({ name: this.character.name, side: side });
  }

}
