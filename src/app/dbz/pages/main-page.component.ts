import { Component, inject } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  // #dbzService = inject(DbzService); Es un ejemplo de inyección de dependencias
  //De la misma forma que es el constructor

  constructor(public dbzService: DbzService) {

  }
}
