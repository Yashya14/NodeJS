const EventEmitter = require('events');
const event = new EventEmitter();

event.on("sayName", (sc,msg) => {
    console.log(`status code is ${sc} and page is ${msg}`);
});

event.emit("sayName",200,"ok");