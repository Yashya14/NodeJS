var fs = require('fs');
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Prorgam Ended");
// program blocks until it reads the file and then only it proceeds to end the program

fs.readFile('input.txt',function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})
console.log("end");
// the program does not wait for file reading and proceeds to print "Program Ended" and at the same time, 
// the program without blocking continues reading the file.