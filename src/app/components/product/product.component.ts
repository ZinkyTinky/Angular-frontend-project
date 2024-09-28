import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pets } from 'src/app/models/pets';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  currentPetId: number = 0;
  pet = new Pets();

  constructor(private petService: PetService, private actRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.currentPetId = parseInt(this.actRoute.snapshot.paramMap.get("id") ?? "");
    this.petService.getPetById(this.currentPetId).subscribe((data: Pets) => {
      this.pet = data;

    });
  }

  backClick(){
    this.router.navigate(['/products']);
  }

  editClick(){
    this.router.navigate(['/edit/' + this.currentPetId]);
  }

  deleteClick(){
    this.petService.deletePet(this.currentPetId).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
