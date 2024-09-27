import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  // public onDelete = new EventEmitter<number>(); ESTO ES LO MISMO QUE ARRIBA

  //en html el botón tiene - (click)="onDeleteCharacter(i)" -
  deleteCharacterById(id: string):void {
    this.onDelete.emit(id);
  }

}
