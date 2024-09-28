import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pets } from 'src/app/models/pets';
import { PetService } from 'src/app/services/pet.service';

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

    constructor(private router: Router, private petService: PetService) { }

    ngOnInit(): void {
    }

    viewClick() {
        this.router.navigate([`products/`, this.pet.id]);
    }

    deleteClick(id: number) {
      this.petService.deletePet(id).subscribe(() => {
        this.router.navigate([`products/`]);
        window.location.reload();
      });
    }

    editClick(){
      this.router.navigate([`edit/`, this.pet.id]);
    }
}
