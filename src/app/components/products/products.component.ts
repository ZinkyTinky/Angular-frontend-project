import { Component, OnInit } from '@angular/core';
import { Pets } from 'src/app/models/pets';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  petList: Pets[] = [];
  showButtons: boolean = true;

  searchWord: string = '';

  constructor(private petService: PetService) { }


  ngOnInit() {
    this.petService.getAllPets().subscribe((data) => {
      this.petList = data;
    });
  }

  searchPet() {
    this.petService.searchPet(this.searchWord).subscribe((data) => {
      this.petList = data;
    });
  }

}
