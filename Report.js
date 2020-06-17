var _data = {};
fetch('https://api.covid19india.org/raw_data6.json')
.then(response => {
    console.log('response status : ' + response.status);
    response.json()
        .then(data =>{
            _data = data["raw_data"];
            console.log(`${_data.length} data received!`);
        })
        .catch(err=>{
            console.log('Error after receiving data: ', err);
        })
})
.catch(error => {
    console.log('Error occurred to fetch data: ', error);
})

//Random
'length' in ['width', 'breadth', 'height'] //Outputs true. LOL

keys = Object.keys(_data[0]);

// A function that can group the data by the field provided for n number of data
// Usage : groupBy('nationality', 100)
// outputs group by nationality count for first 100 records
groupBy = function(field, count){ //count is optional
    if (!field) console.log('group by what?');return;
    report = {};
    data = count ? _data.slice(0, count) : _data; //limiting data
    if (keys.includes(field)){
        for(row of data){
            value = row[field];
            report[value] = value in report 
                ? report[value] + 1 // If entry is present increment it
                : 1;                // If entry is not present, enter it.
        }
    }
    else console.log('Field not present');
    return report;
}

//backup
groupBy = function(field, count){ //count is optional
    if (!field) console.log('group by what?');return;
    report = {};
    data = count ? _data.slice(0, count) : _data; //limiting data
    if (keys.includes(field)){
        for(row of data){
            value = row[field];
            report[value] = value in report 
                ? report[value] + 1 // If entry is present increment it
                : 1; debugger;               // If entry is not present, enter it.
        }
debugger;
    }
    else console.log('Field not present');
    return report;
}
