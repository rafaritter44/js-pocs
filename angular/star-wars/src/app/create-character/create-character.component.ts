import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  public availableSides: { display: string, value: string }[] = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' }
  ];

  public defaultName = 'Obi-Wan';

  constructor(private swService: StarWarsService) { }

  public ngOnInit(): void {
  }

  public onSubmit(submitttedForm: NgForm): void {
    if (submitttedForm.invalid) {
      return;
    }
    console.log(submitttedForm.value);
    this.swService.addCharacter(submitttedForm.value.name, submitttedForm.value.side);
  }

}
