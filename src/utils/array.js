/**
 * check obj is an Array object
 * @param {Array} arr
 */
export const isArray = (obj) => obj instanceof Array;

/**
 * check arr is Array and have at least one value
 * @param {Array} arr
 */
export const isArrayValued = (arr) => isArray(arr) && arr.length > 0;

/**
 * return array if obj is array with at leat one value else return []
 * @param {obj} arr
 */
export const GetArray = (obj) => (isArrayValued(obj) ? obj : []);

/**
 * Group by
 * @param {Array} arr
 * @param {string} key
 * example : groupByArray(["one", "two", "three"], "length")
 * result => {3: ["one", "two"], 5: ["three"]}
 */
export const groupByArrayItemsProps = (arr, key) => {
  return arr.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
