import { Component, Input, OnInit } from '@angular/core';
import { Pets } from 'src/app/models/pets';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {

    @Input()
    pet: Pets = new Pets();

    @Input()
    showPetDescription!: boolean;

    @Input()
    showButtons!: boolean;

    constructor() { }

    ngOnInit(): void {
    }

}
