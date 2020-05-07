// indexOf/lastIndexOf
// ---------------------------------------------------------------------------------------------
// Let's see two ways of finding presence of a character in a string. indexOf(char) returns the first occurence 
// where as lastIndexOf(char) returns the last occurence
river=Array.from('mississipi');
char='m'
river.reverse().indexOf(char);
river.lastIndexOf(char); //59% slower
// Arrangement of the char in the string matters. Let's change the character from 'm' to 's'
char='s'
river.reverse().indexOf(char);
river.lastIndexOf(char); //still 23% slower

// Considering all characters
river.forEach(char => { river.reverse().indexOf(char);});
river.forEach(char => { river.lastIndexOf(char); }); // 19% slower

// ----------------------------------------------------------------------------------------------
