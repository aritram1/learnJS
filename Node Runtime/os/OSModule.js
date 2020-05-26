moduleName='os'
module=require(moduleName)
methodName='arch'
//console.log(`${eval(${module}.${methodName}))}`)

displayAllMethods = function(){
  console.log(`Methods of ${moduleName} modules are :`);
  for (func in module){
      console.log(`${func}`);
  }    
}

callMethod = function(name){
  console.log(`os.${name}() method is called`);
  src=`${module}.${method}()`;
  console.log(`The result is ${eval(res)}`);
}

callAllMethods = function(){
  for(o in os){
    callMethod(o);
  }
}
