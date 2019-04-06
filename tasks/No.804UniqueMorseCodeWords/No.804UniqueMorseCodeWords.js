/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {   
  const morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  const aCharCode = 'a'.charCodeAt()
  return new Set(words.map(
      word => word.split('').reduce(
          (morseWord, char) => morseWord + morseArr[char.charCodeAt() - aCharCode], '')
  )).size
};