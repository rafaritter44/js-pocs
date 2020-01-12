import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Character } from './character.model';
import { LogService } from './log.service';

interface Response {
  results: [
    {
      name: string
    }
  ]
}

@Injectable()
export class StarWarsService {

  private characters: Character[] = [];

  public charactersChanged = new Subject<void>();
  public charactersFetched = false;

  public constructor(private httpClient: HttpClient, private logService: LogService) {}

  public fetchCharacters(): void {
    this.httpClient
        .get<Response>('https://swapi.co/api/people')
        .map(response => response.results.map(character => new Character(character.name)))
        .subscribe(characters => {
          this.characters = characters;
          this.charactersChanged.next();
          this.charactersFetched = true;
        });
  }

  public getCharacters(chosenList: string): Character[] {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter(char => char.side === chosenList);
  }

  public onSideChosen(character: Character): void {
    const position = this.characters.findIndex(char => char.name === character.name);
    this.characters[position].side = character.side;
    this.charactersChanged.next();
    this.logService.writeLog(`Changed side of ${character.name} to ${character.side}`);
  }

  public addCharacter(character: Character): void {
    const position = this.characters.findIndex(char => char.name === character.name);
    if (position !== -1) {
      return;
    }
    this.characters.push(character);
  }

}
