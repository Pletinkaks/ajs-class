import { Character } from './basic';

export default class Swordsman extends Character {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

const obj = new Swordsman('Ks', 'Swordsman');

console.log(obj);