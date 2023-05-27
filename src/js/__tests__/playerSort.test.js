/* eslint-disable linebreak-style */
import palyersSort from '../playerSort';

const arr1 = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const arr2 = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('Сортировка игроков по уровню здоровья', () => {
  expect(palyersSort(arr1)).toEqual(arr2);
});
