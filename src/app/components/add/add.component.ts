import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pets } from 'src/app/models/pets';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  pet: Pets = new Pets();

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.petService.addPet(this.pet).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }

  backClick() {
    this.router.navigate(['/products']);
  }
}
