

const os = require("os")

const currentOs  =  {
    userinfo : os.userInfo(),
    name: os.type(),
    realease: os.release(),
    totalmen: os.totalmem(),
    freemem: os.freemem(),
    uptime: os.uptime()
}

console.log(currentOs)
// console.log(currentOs.uptime / 3600)