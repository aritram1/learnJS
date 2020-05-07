// Test from : https://jsbench.me/
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

// The examples, can not ignore disctribution of the character in the string, so lets run for all characters 
// of the string
river.forEach(char => { river.reverse().indexOf(char);});
river.forEach(char => { river.lastIndexOf(char); }); // still 19% slower

// Also test with one character word
Word='Q';
Word.forEach(char => { Word.reverse().indexOf(char);});
Word.forEach(char => { Word.lastIndexOf(char); }); // still 26% slower

// ----------------------------------------------------------------------------------------------
