// console.log("welcome to the nodejs project");
// console.warn("file is running");

//***************file system*********************
// const fs = require("fs");
// const data = fs.readFileSync("input.txt", "utf8"); // blocking code
// console.log(data);
// console.log("Program finished");

// const data = fs.readFile("input.txt", "utf8",(err,data)=>{
//     if(err) return console.error(err);
//     console.log(data);
// }); // non-blocking code
// console.log("program finished");

//*************** Events *******************
// const events = require("events");
// const eventEmitter = new events.EventEmitter(); // eventEmitter OBJECT

// const connectHandler = function connected(){
//     console.log("connected");
//     eventEmitter.emit("data_received"); // fire the data received event
// }

// eventEmitter.on("connection",connectHandler); // connection event with the handeler

// eventEmitter.on("data_received", function(){ // bind the data_received event with the anonymous function
//     console.log("data_received successfully ");
// });

// eventEmitter.emit("connection"); // fire the connection event
// console.log("ended");

//****************** Buffer *************************
// const buffer = new Buffer.alloc(256);
// const len = buffer.write("simple learning");
// const data =buffer.write("hello world");
// const len1 = buffer.concat(len,data);  // not working
// console.log("length: " + len);

//**************** async core module *****************
const fs =  require("fs");
// fs.writeFile("bio.txt", "hello world",(err) => {
//     console.log("writing file " + err);
// })

// fs.appendFile("bio.txt", " welcome to nodejs project",(err) => {
//     console.log("appending file " +err);
// })

// fs.readFile("bio.txt",(err,data) => {
//     if(err) console.log(err)
//     console.log(data.toString());
// });

// fs.rename( "myBio.txt","bio.txt",() => {
//     console.log("deleting file ");
// });

// fs.mkdirSync("yash");
// fs.writeFileSync("yash/name.txt","this is a new file");
// fs.unlinkSync("yash/name.txt");
// fs.rmdirSync("yash");