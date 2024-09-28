import { Component, OnInit } from '@angular/core';
import { Pets } from 'src/app/models/pets';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  petList: Pets[] = [];

  constructor(private petService: PetService) { 
    this.petService.getFirstThreePets().subscribe((data) => {
      this.petList = data;
    });
  }

  ngOnInit(): void {
  }

}
