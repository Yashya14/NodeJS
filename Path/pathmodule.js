const path = require('path');
console.log(path.dirname("D:/nodejs/pathmodule.js"));
console.log(path.extname("D:/nodejs/pathmodule.js"));
console.log(path.basename("D:/nodejs/pathmodule.js"));

const pathname = path.parse("D:/nodejs/pathmodule.js");
console.log(pathname);
console.log(pathname.name);