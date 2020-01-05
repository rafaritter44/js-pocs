import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LogService } from './log.service';
import { Character } from './character.model';
import 'rxjs/add/operator/map';

interface Response {
  results: [
    {
      name: string
    }
  ]
}

@Injectable()
export class StarWarsService {

  private characters: Character[] = [
    { name: 'Luke Skywalker', side: 'light' },
    { name: 'Darth Vader', side: 'dark' }
  ];

  public charactersChanged = new Subject<void>();

  public constructor(private httpClient: HttpClient, private logService: LogService) {}

  public fetchCharacters() {
    this.httpClient
        .get<Response>('https://swapi.co/api/people')
        .map(response => response.results.map((character) => new Character(character.name)))
        .subscribe(characters => {
          this.characters = characters;
          this.charactersChanged.next();
        });
  }

  public getCharacters(chosenList: string): Character[] {
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
