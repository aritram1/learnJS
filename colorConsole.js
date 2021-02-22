// Console can be colored with %c and style content
// let's create a new method and attach to console class to test this.
window.console.log2 = function(arg){
    const style = 'color : red';
    const newarg = '%c' + arg;
    window.console.log(newarg, style);
}

// It can also be done with a decorator pattern
window.console.log2 = function(f, arg){
    let newf = function(){
        return window.console.log(`%c ${arg}`, 'color : red');
    }
    return newf;
}

// then we need to use it ike : 
console.log2('Hello world!')();

// or better in decorator format
@decorator
function(){
  //code
}
