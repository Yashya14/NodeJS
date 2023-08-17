const os = require('os');
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.type());

// const freeMemory = os.freemem();
// console.log(`free memory: ${freeMemory/1024/1024/1024}`);

// const totalMemory = os.totalmem();
// console.log(`total memory: ${totalMemory/1024/1024/1024}`);