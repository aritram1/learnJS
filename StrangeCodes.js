// 1 - All codes in wtf.js :D
// -------------------------------------------------------------------------------------------
// 2 - This function which does many things, still returns output same as input
doNothing = function(char){
  typeOf(this) != 'string' ? return : ;
  that = p.slice.call(Array.from(this), 
                      this.indexOf(char), 
                      this.lastIndexOf(char)+1)
                .join('');
  return that;// === this;
}

//Usage : YouName.doNothing();

'aritra'.doNothing();
