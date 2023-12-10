var input = `       JVB Việt Nam           
JVB Việt  Nam
JVB                   Việt          Nam          
         JVB         Việt  Nam `;

//Cach 1
var cleanedString1 = input.replace(/\s+/g, ' ');
console.log(cleanedString1);

//Cach 2
var wordsArray = input.split(/\s+/);
var cleanedString2 = wordsArray.join(' ');
console.log(cleanedString2);
