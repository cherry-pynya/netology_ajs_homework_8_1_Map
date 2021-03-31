// eslint-disable-next-line import/extensions
import Team from '../team.js';
// eslint-disable-next-line import/extensions
import { Bowerman } from '../Character.js';

const grisha = new Bowerman('grisha');
const dima = new Bowerman('dima');
const ivan = new Bowerman('ivan');
const team = new Team();
test('create team', () => {
  expect(new Team()).toEqual({ members: new Set() });
});
test('add one member', () => {
  team.add(grisha);
  expect(team.members.has(grisha)).toBeTruthy();
});
test('add existing member', () => {
  expect(() => team.add(grisha)).toThrow('this member allready in the team');
});
test('add group', () => {
  team.addAll(dima, ivan);
  expect(team.members.has(dima)).toBeTruthy();
});
test('add group', () => {
  team.addAll(dima, ivan);
  expect(team.members.has(ivan)).toBeTruthy();
});
test('show', () => {
  team.addAll(dima, ivan);
  expect(team.toArray()).toEqual([
    {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'grisha',
      type: 'Bowerman',
    },
    {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'dima',
      type: 'Bowerman',
    },
    {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'ivan',
      type: 'Bowerman',
    },
  ]);
});
