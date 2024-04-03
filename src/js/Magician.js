import { Character } from './basic';

export default class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

const obj = new Magician('Ks', 'Magician');

console.log(obj);