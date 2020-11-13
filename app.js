
const fs = require('fs');
//var chokidar = require('chokidar')


var fileLoc = './watchedFolder';
var reciever = './dest_folder'; //temp until database is created

fs.watch(fileLoc, (eventType, filename) => {

    console.log('Event occured in Directory ' 
    + eventType +' filename: ' + filename);

    var path = fileLoc+'/'+filename;
    var newPath = reciever+'/'+filename;
    //copy file into destination folder
    fs.copyFile(path, newPath,(err)=>{
        if(err) console.log('error', err);
    });
});
