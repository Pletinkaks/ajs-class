import { Character } from './basic';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

const obj = new Daemon('Ks', 'Daemon');

console.log(obj);