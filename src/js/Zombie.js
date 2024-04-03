import { Character } from './basic';

export default class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

const obj = new Zombie('Ks', 'Zombie');

console.log(obj);