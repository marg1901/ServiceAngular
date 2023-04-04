import { Injectable } from '@angular/core';
import { Cocktail } from './model/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }
  cocktails: Cocktail[]=[
    {
      name: "cocktail1",
      price: 1,
      image: "https://pixabay.com/fr/photos/cocktails-cocktail-boisson-jus-6950673/"
    },
      {
      name: "cocktail2",
      price: 2,
      image: "https://pixabay.com/fr/illustrations/cocktail-mod%C3%A8le-fond-d-%C3%A9cran-5814563/"
    },
      {
      name: "cocktail3",
      price: 3,
      image: "https://pixabay.com/fr/photos/boissons-cocktail-de-l-alcool-6713318/"
    }
  ]
  getCocktails() {
    return this.cocktails;
  }
}
