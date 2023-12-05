/**
 * returns a boolean if all the elements in the array exist within the set
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}

