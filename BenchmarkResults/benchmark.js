// indexOf/lastIndexOf
// ---------------------------------------------------------------------------------------------
// Let's see two ways of finding presence of a character in a string. indexOf(char) returns the first occurence 
// where as lastIndexOf(char) returns the last occurence
river=Array.from('mississipi');
char='m'
river.reverse().indexOf(char);
river.lastIndexOf(char); //59% slower
// Let's change the character from 'm' to 's'
char='s'
river.reverse().indexOf(char);
river.lastIndexOf(char); //23% slower

// ----------------------------------------------------------------------------------------------
