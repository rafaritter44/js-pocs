import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StarWarsService {

  private characters: { name: string, side: string }[] = [
    { name: 'Luke Skywalker', side: 'light' },
    { name: 'Darth Vader', side: 'dark' }
  ];

  public charactersChanged = new Subject<void>();

  constructor(private logService: LogService) {}

  public getCharacters(chosenList: string): { name: string, side: string }[] {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter(char => char.side === chosenList);
  }

  public onSideChosen(charInfo: { name: string, side: string }): void {
    const position = this.characters.findIndex(char => char.name === charInfo.name);
    this.characters[position].side = charInfo.side;
    this.charactersChanged.next();
    this.logService.writeLog(`Changed side of ${charInfo.name} to ${charInfo.side}`);
  }

  public addCharacter(name: string, side: string): void {
    const position = this.characters.findIndex(char => char.name === name);
    if (position !== -1) {
      return;
    }
    // const newChar = { name: name, side: side };
    this.characters.push({ name, side });
  }

}
