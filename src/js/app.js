import Daemon from './Daemon';
import Zombie from './Zombie';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Bowman from './Bowman';
import Undead from './Undead';

export function createDaemon(name, type) {
  return new Daemon(name, type);
}

export function createBowman(name, type) {
  return new Bowman(name, type);
}

export function createMagician(name, type) {
  return new Magician(name, type);
}

export function createSwordsman(name, type) {
  return new Swordsman(name, type);
}

export function createUndead(name, type) {
  return new Undead(name, type);
}

export function createZombie(name, type) {
  return new Zombie(name, type);
}