import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public characters: { name: string, side: string }[] = [];

  public constructor(
    private swService: StarWarsService,
    private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.activatedRoute
        .params
        .subscribe(params => this.characters = this.swService.getCharacters(params.side))
  }

}
