const {BrowserWindow} = require('electron')
const path = require("path")

const createWindow = ()=>{
  const mainWindow = new BrowserWindow({
    width:400,
    height:400,
    x:0,
    y:0,
    webPreferences:{
      preload:path.resolve(__dirname,'preload.js'),
      nodeIntegration:true,
      contextIsolation:false
    }
  })

  mainWindow.loadFile(path.relative(__dirname,"index.html"))
}

module.exports = {createWindow}
