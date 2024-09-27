import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // Esta propiedad va a mandar un personaje a padre main-page.component
  // Tanto el output como el public onnewcharacter son eventos
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) {
      return;
    }

    this.onNewCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0
    }
  }

}
