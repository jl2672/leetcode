/**
 * You have a set of tiles, where each tile has one letter tiles[i] printed on it.  Return the number of possible non-empty sequences of letters you can make.
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const res = new Set();
    dfs('', tiles);
    return res.size;

    function dfs(curr, tiles) {
      if (curr) res.add(curr);
      for (let i = 0; i < tiles.length; i++) {
        dfs(curr+tiles[i], tiles.slice(0, i) + tiles.slice(i + 1, tiles.length));
      }
    }
};
