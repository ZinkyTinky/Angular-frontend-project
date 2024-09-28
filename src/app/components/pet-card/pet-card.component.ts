import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    viewClick() {
        this.router.navigate([`products/`, this.pet.id]);
    }

    deleteClick(){

    }

    editClick(){
      this.router.navigate([`edit/`, this.pet.id]);
    }

}
