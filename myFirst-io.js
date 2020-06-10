var fs = require('fs')


var filePath = process.argv[2];
var output = fs.readFileSync('./hello.txt');
 output = output.toString().split('\n'); 
console.log(output);
