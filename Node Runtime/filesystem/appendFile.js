var fs = require('fs');
var myutil = require('./myutil');

// open file
const tempfile = './data_temp';
var newFile1 = fs.open(tempfile, 'w', function(err, data){
    if(!err) console.log(`${tempfile} File opened`);
    fs.close(data, function(err, data){
        if(!err) console.log(`${tempfile} File closed`);
    });
});

//read file
const file = './data';
var newFile2 = fs.readFile(file, 'utf8', function(err, data){
    if(!err){
        console.log(`${file} File opened`);
        console.log('content : ' + data);
    }
});

// append file
const aritra = myutil.generateData('aritra', 'mukherjee', 'Mr.', 'Javascript');
const moniseeta = myutil.generateData('moniseeta', 'roy', 'Mrs.', 'Docker');
const bhai = myutil.generateData('aritra', 'roy', 'Mr.', 'Flutter');
entries = aritra + moniseeta + bhai;
var newFile3 = fs.appendFile('./data', entries, function(err, data){
    if(!err){
        console.log('After appending data');
        console.log(data);
    }
});