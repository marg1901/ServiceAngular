import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../model/cocktail';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  constructor(
    public cocktailService: CocktailService
    ) 
    { }

  cocktails: Cocktail[]= [];

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }

}
