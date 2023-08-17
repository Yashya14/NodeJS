const fs = require('fs');
const bioData = {
    name :"yash pal",
    age :20,
    channel:"yash tech"
};

// object to json 
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData); //{"name":"yash pal","age":20,"channel":"yash tech"}

// json to object
// const objData = JSON.parse(jsonData);
// console.log(objData); //{ name: 'yash pal', age: 20, channel: 'yash tech' }

const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err) => {
    console.log("written json");
});

fs.readFile("json1.json","utf-8", (err,data) => {
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
})