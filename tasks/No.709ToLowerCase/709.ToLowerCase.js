/**
 * A-Z 65-90
 * a-z 97-122
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let lowerStr = ''
  for (let i = 0; i < str.length; i++) {
      let code = str[i].charCodeAt()
      if (code >= 65 && code <= 90) {
          lowerStr += String.fromCharCode(code + 32) 
      } else {
          lowerStr += str[i]
      }
  }
  return lowerStr
};