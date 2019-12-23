import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  public chosenList = 'all';

  private swService: StarWarsService;

  public constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  public ngOnInit(): void {
  }

  public onChoose(side: string): void {
    this.chosenList = side;
  }

  public getCharacters(): { name: string, side: string }[] {
    return this.swService.getCharacters(this.chosenList);
  }

}
