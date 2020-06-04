// A File can be read in Node in two ways, synchronously or asynchronously

///Import the file system module
const fs = require('fs');

/////////////Let's see how this works in sync way////////////////////
function synctest(){
    //Write  the file
    console.log('File is being written');
    fs.writeFileSync('sync.txt', 'Hi, you read me!');
    console.log('File has been written');

    //Read the file
    console.log('File is being read now');
    let content = fs.readFileSync('sync.txt', 'utf-8');
    console.log(`File is read. Content is : ${content}`);
}

// Let's test it 
synctest();
// Output:
// File is being written
// File has been written
// File is being read now
// File is read. Content is : Hi, you read me!

/////////////Let's see how this works in async way////////////////////
function asynctest(){
    console.log('File is being written in async way');
    fs.writeFile('async.txt', 'Hi, now you read me async', function(err, data){//first err, then data
        console.log('File has been written in async way.');

        //No we will read the file
        console.log('File is being read now in async way.');
        fs.readFile('async.txt', 'utf-8', function(err, data){ //first err, then data
            console.log(`File is read async. Content is : ${data}`); 
        });
    })
}

asynctest();
// output:
// File is being written in async way
// File has been written in async way.
// File is being read now in async way.
// File is read async. Content is : Hi, now you read me async