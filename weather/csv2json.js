//批量csv2json
//const csvFilePath='rain_data/rain_1961_pre_06.csv'
const fromPath = 'standPrbCsv';
const toPath = 'standPrbJson';
const csv=require('csvtojson')
const fs = require('fs');

function csv2json(csvFilePath,savePath){
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            // getGeoCoordMap(jsonObj)
            // getNameValueArr(jsonObj);
            var jsonContent = JSON.stringify(jsonObj);
            fs.writeFile(savePath, jsonContent, 'utf8', function (err) {
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                }
                console.log("JSON file has been saved.");
            });
        })
}
//read rain_data folder
fs.readdir(fromPath, (err, files) => {
    files.forEach(file => {
        let filePath = fromPath+'/'+file;
        let savePath = toPath+'/'+file.split('.')[0]+'.json';
        csv2json(filePath,savePath);
    });
})



//csv2json(csvFilePath,'rain_json/rain_1961_pre_06.json')

//Async / await usage
// const json=csv().fromFile(csvFilePath);
// const jsonString = JSON.stringify(json, null, 2)
// console.log(json)