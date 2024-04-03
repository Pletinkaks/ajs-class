import { Character } from './basic';

export default class Bowman extends Character {
  constructor(name, type = 'Bowman') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

const obj = new Bowman('Ks', 'Bowman');

console.log(obj);