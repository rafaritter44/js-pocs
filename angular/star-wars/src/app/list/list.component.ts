import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StarWarsService } from '../star-wars.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  public characters: { name: string, side: string }[] = [];
  private loadedSide = 'all';
  private subscription: Subscription;

  public constructor(
    private swService: StarWarsService,
    private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.swService.fetchCharacters();
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private updateCharacters(): void {
    this.characters = this.swService.getCharacters(this.loadedSide);
  }

}
