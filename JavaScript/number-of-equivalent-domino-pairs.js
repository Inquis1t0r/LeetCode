/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    //TODO: Rework this algo
    const seen = new Map();
    const normalized = dominoes.map(pair => pair.slice().sort().join(','));

    for (const key of normalized) {
        seen.set(key, (seen.get(key) || 0) + 1);
    }
    let count = 0;
    for (let i = 0; i < normalized.length; i++) {
        if (seen.get(normalized[i]) > 1) {
            count++;
        }
    }

  return count;
};
