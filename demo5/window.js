const {BrowserWindow} =  require("electron")
const {resolve} = require("path")

const createWindow = ()=>{
  const mainWindow = new BrowserWindow({
    width:300,
    height:300,
    x:100,
    y:100,
    webPreferences:{
      preload:resolve(__dirname,"./preload.js")
    }
  })
  mainWindow.loadFile(resolve(__dirname,"./index.html"))
  mainWindow.webContents.openDevTools();
}

module.exports = {createWindow}