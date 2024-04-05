import {
  createDaemon, createBowman, createMagician, createSwordsman, createUndead, createZombie,
} from '../app';


test('The Daemon must be created with the correct parameters', () => {
  expect(createDaemon('Ks', 'Daemon')).toEqual({
    name: createDaemon('Ks', 'Daemon').name, type: createDaemon('Ks', 'Daemon').type, health: 100, level: 1, attack: 10, defence: 40,
  });
});

test('The Bowman must be created with the correct parameters', () => {
  expect(createBowman('Ks', 'Bowman')).toEqual({
    name: createBowman('Ks', 'Bowman').name, type: createBowman('Ks', 'Bowman').type, health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('The Magician must be created with the correct parameters', () => {
  expect(createMagician('Ks', 'Magician')).toEqual({
    name: createMagician('Ks', 'Magician').name, type: createMagician('Ks', 'Magician').type, health: 100, level: 1, attack: 10, defence: 40,
  });
});

test('The Swordsman must be created with the correct parameters', () => {
  expect(createSwordsman('Ks', 'Swordsman')).toEqual({
    name: createSwordsman('Ks', 'Swordsman').name, type: createSwordsman('Ks', 'Swordsman').type, health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('The Undead must be created with the correct parameters', () => {
  expect(createUndead('Ks', 'Undead')).toEqual({
    name: createUndead('Ks', 'Undead').name, type: createUndead('Ks', 'Undead').type, health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('The Zombie must be created with the correct parameters', () => {
  expect(createZombie('Ks', 'Zombie')).toEqual({
    name: createZombie('Ks', 'Zombie').name, type: createZombie('Ks', 'Zombie').type, health: 100, level: 1, attack: 40, defence: 10,
  });
});

// Проверка ошибок

test('name check <2', () => {
  expect(() => { createZombie('A', 'Zombie'); }).toThrow('the name must not be shorter than 2 characters!');
});

test('name check >10', () => {
  expect(() => { createZombie('Ks Zombie 2', 'Zombie'); }).toThrow('the name must not be longer than 10 characters!');
});

test('name check string', () => {
  expect(() => { createZombie(1234, 'Zombie'); }).toThrow('the name must be of the string type!');
});

test('type check', () => {
  expect(() => { createZombie('Ks', 'flyer'); }).toThrow('the type must be from Bowman, Swordsman, Wizard, Daemon, Undead, Zombie');
});