import { Component, Input } from '@angular/core';
import { Character } from 'app/character.model';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent {

  @Input() public character: Character;

  public constructor(private swService: StarWarsService) {}

  public onAssign(side: string): void {
    this.swService.onSideChosen({ name: this.character.name, side });
  }

}
