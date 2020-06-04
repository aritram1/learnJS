
// Read a directory
const path = process.cwd(); ///home/aritra/Desktop/learnJS/learnJS
fs.readdir(path, function(err, data){
    if (!err) console.log(data);
})
