/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  const map = new Map();
  let count = 0;

  for (let pair of dominoes) {
    const key = pair.slice().sort((a, b) => a - b).toString();

        if (map.has(key)) {
            count += map.get(key);
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    }

  return count;
};
