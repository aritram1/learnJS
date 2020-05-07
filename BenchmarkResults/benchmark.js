// indexOf/lastIndexOf
// ---------------------------------------------------------------------------------------------
// Let's see two ways of finding presence of a character in a string. indexOf(char) returns the first occurence 
// where as lastIndexOf(char) returns the last occurence
river=Array.from('mississipi');
char='s'
river.reverse().indexOf(char);
river.lastIndexOf(char); //23% slower
// ----------------------------------------------------------------------------------------------
