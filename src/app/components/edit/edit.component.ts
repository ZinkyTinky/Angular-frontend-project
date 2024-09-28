import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pets } from 'src/app/models/pets';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  currentPetId: number = 1;
  pet: Pets = new Pets();

  constructor(private petService: PetService, private actRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {

    this.currentPetId = parseInt(this.actRoute.snapshot.paramMap.get("id") ?? "");
    
    this.petService.getPetById(this.currentPetId).subscribe((data: Pets) => {
      this.pet = data;
    });

    console.log(this.pet.name);
  }

  backClick() {
    this.router.navigate(['/products/', this.currentPetId]);
  }

  onSubmit() {
    this.petService.updatePet(this.currentPetId, this.pet).subscribe(() => {
      this.router.navigate(['/products']); 
    });
  }
}
