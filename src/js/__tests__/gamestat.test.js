/* eslint-disable linebreak-style */
import Gamestat from '../gamestat';

test('90 to equal healthy', () => {
  expect(Gamestat({ name: 'Маг', health: 90 })).toBe('healthy');
});
test('51 to equal healthy', () => {
  expect(Gamestat({ name: 'Маг', health: 51 })).toBe('healthy');
});
test('50 to equal wounded', () => {
  expect(Gamestat({ name: 'Маг', health: 50 })).toBe('wounded');
});
test('45 to equal wounded', () => {
  expect(Gamestat({ name: 'Маг', health: 45 })).toBe('wounded');
});
test('15 to equal critical', () => {
  expect(Gamestat({ name: 'Маг', health: 15 })).toBe('critical');
});
test('12 to equal critical', () => {
  expect(Gamestat({ name: 'Маг', health: 12 })).toBe('critical');
});
