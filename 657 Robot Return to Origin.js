/**
 * Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
 * @param {string} moves
 * @return {boolean}
 */

var judgeCircle = function(moves) {
  let x = 0;
  let y = 0;
  for (char of moves) {
    if (char === 'U') y += 1;
    else if (char === 'D') y -= 1;
    else if (char === 'R') x += 1;
    else if (char === 'L') x -= 1;
  }
  return (x === 0) && (y === 0);
};
