// generate data
const generate = function(fname, lname, title, subject){
    id = Math.floor(Math.random(1) * 100);
    entry = `\n ${id}, ${fname}, ${lname}, ${title}, ${title + ' ' + fname + ' ' + lname}, ${subject}`;
    //console.log(entry);
    return entry;
}

module.exports = {generate};
