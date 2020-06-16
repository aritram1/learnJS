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

report_state={};
for (r of _data){
    if (r.detectedstate in report_state)
        report_state[r.detectedstate] = report_state[r.detectedstate]+1;
    else
        report_state[r.detectedstate] = 0;
}
