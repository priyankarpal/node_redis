import client from "./client.js";

async function init() {
    await client.set("msg:1", " hey_from_nodejs"); // set the value of"msg:1"
    await client.expire("msg:1", 10); // add expire time of "msg:1" to 10 sec 
    const result=await client.get("msg:1"); // get the "msg:1" string
    console.log(result);
}

init();
