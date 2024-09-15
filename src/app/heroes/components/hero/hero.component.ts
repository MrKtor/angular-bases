import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public changedName: boolean = false;
  public changedAge: boolean = false;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {

    return `${this.name} - ${this.age}`;
  }

  changeHero() :void {

    !this.changedName ? this.name = 'Spiderman' : this.name = 'ironman';
    this.changedName = !this.changedName;
  }

  changeAge() :void {

    !this.changedAge ? this.age = 25 : this.age = 45;
    this.changedAge = !this.changedAge;

  }

  reset() :void {

    this.name = 'ironman';
    this.age = 45;
    this.changedName = false;
    this.changedAge = false;

    document.querySelectorAll('h1')!.forEach( element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    });
    //querySelector busca el primer elemento
    //document.querySelectorAll('h1').innerHTML = '<h1>Desde Angular</h1>';
    //querySelectorAll busca todos los elementos y se debe hacer un foreach
    //document.querySelectorAll('h1').forEach( element => {
    //  element.innerHTML = '<h1>Desde Angular</h1>';
    //});

  }



}
