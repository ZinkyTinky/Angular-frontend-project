import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {

    @Input()
    animalName: string = '';

    @Input()
    description: string = '';

    @Input()
    price: number = 0;

    @Input()
    image: string = '';

    constructor() { }

    ngOnInit(): void {
    }

}
