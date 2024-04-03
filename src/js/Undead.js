import { Character } from './basic';

export default class Undead extends Character {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

const obj = new Undead('Ks', 'Undead');

console.log(obj);