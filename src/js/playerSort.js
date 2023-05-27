/* eslint-disable linebreak-style */
export default function palyersSort(arr) {
  arr.sort((a, b) => (a.health > b.health ? -1 : 1));
  return arr;
}
