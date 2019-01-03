const strings = require('./definitions/strings.js').strings;

let chars = "";
get_unique_characters = definition => {
  const data = require(`./definitions/${definition}.json`);

  data.strings.forEach(string => {
    string.text.split("").forEach(letter => {
    	// Just add the unique letters to chars
      if (!chars.match(letter)) {
        chars += letter;
      }
    });
  });
};
strings.forEach(get_unique_characters);

// Sort the letters
chars = chars.split("").sort().join("");

console.log(chars);