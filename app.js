require("dotenv").config()
let fs = require("fs")
let path = require("path")
const { exec } = require('child_process')

const filePath = process.env.FILEPATH
const fileName = process.env.FILENAME
const timeOutTime = process.env.TIMEOUT
const isLog = process.env.ISLOG && process.env.ISLOG.toLowerCase() == "true"
const workTime = process.env.WORKTIME
const delayTime = process.env.DELAYTIME
const delayAfterMacro = process.env.DELAYAFTERRUNMACRO
const macroName = process.env.MACRONAME

async function isOnline() {
    let data = await fs.readFileSync(getFullFileName(), 'utf8')
    if (data) {
        let decoded = Number(JSON.parse(data))
        if (decoded && (Math.abs(osTime() - decoded) < timeOutTime)) {
            return true
        }
    }

    return false
}

function osTime() {
    return Math.floor(Date.now() / 1000)
}

function getFullFileName() {
    return path.join(filePath, fileName)
}

function RunMacro() {
    exec('CALL ' + macroName, function(err) { if (err) { writeLog(err) } })

    writeLog(`Succeed run macro at ${getTime()}`)
}

function sleep(ms) {
    return new Promise((resolve) => { setTimeout(resolve, ms) })
}

function writeLog(text) {
    let content = `Log : ${text}`
    console.log(content)
    if (isLog) {
        fs.appendFileSync("./log.txt", content + '\n', 'utf-8')
    }
}

function getTime() {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    return `${day}/${month}/${year} ${hour}:${minute}:${second}`
}

async function Main() {
    setTimeout(() => {
        writeLog(`End process at ${getTime()}`)
        setTimeout(() => { process.exit() }, 1000);
    }, workTime * 60 * 1000)

    writeLog(`Start at ${getTime()}`)
    await sleep(delayTime * 1000)
    while (true) {
        if (await isOnline()) {
            writeLog(`Online at ${getTime()}`)
        } else {
            RunMacro()
            await sleep(delayAfterMacro * 1000)
        }
        await sleep(delayTime * 1000)
    }
}


Main()