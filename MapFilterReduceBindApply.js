//Some sample values

values = [
  {'a':1, 'accept':true},
  {'a' : 2},
  {'b':3},
  {'c':4}
]; 

process = function(obj, retval=0){
  if(j.accept){
    if (obj.a) retval+=obj.a;
    if (obj.b) retval+=obj.b;
    if (obj.c) retval+=obj.c;
  }
  return retval;
}

values.reduce(function(initial,next){
  return initial + process(next);
}, 0);
