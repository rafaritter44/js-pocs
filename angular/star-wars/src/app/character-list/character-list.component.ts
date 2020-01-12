import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Character } from '../character.model';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit, OnDestroy {

  public characters: Character[] = [];
  private loadedSide = 'all';
  private subscription: Subscription;

  public constructor(
    private swService: StarWarsService,
    private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.activatedRoute
        .params
        .subscribe(params => {
          this.loadedSide = params.side;
          this.updateCharacters();
        });
    this.subscription = this.swService
        .charactersChanged
        .subscribe(() => this.updateCharacters());
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public charactersFetched(): boolean {
    return this.swService.charactersFetched;
  }

  private updateCharacters(): void {
    this.characters = this.swService.getCharacters(this.loadedSide);
  }

}
