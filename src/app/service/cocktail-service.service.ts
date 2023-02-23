import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktails(): Array<Cocktail>{
    let cocktails = [
      new Cocktail('Bloody Mary', 9, 'https://www.cocktailmag.fr/media/k2/items/cache/1c0ae2205709722b62e843abc0471a55_S.jpg'),
      new Cocktail('Tequila Sunrise', 10, 'https://www.cocktailmag.fr/media/k2/items/cache/2fa67f482133f1c934235b73c2a03954_S.jpg'),
      new Cocktail('Salty Dog', 8, 'https://www.cocktailmag.fr/media/k2/items/cache/0b1ad7a7b79268a1f4558db78e092446_S.jpg'),
      new Cocktail('Balalaïka', 11, 'https://www.cocktailmag.fr/media/k2/items/cache/ccb4e23c8aa216f1e96d31ab209c036b_S.jpg'),
    ];

    return cocktails;
  }
}
