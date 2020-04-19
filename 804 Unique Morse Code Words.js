/**
 * Return the number of different transformations among all words we have.
 * @param {string[]} words
 * @return {number}
 */

var uniqueMorseRepresentations = function(words) {
  if(!words) return;
  let morseArr = [];
  for(let word of words){
    let word_morse_code;
    for(let morse of word){
      word_morse_code += Morse_Code_Map[morse]
    }
    if(!morseArr.includes(word_morse_code)){
      morseArr.push(word_morse_code);
    }
  }
  return morseArr.length;
};
