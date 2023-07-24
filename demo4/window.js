const {BrowserWindow} = require("electron")
const {resolve} = require('path')

const createWindow = ()=>{
  const win = new BrowserWindow({
    width:300,
    height:300,
    alwaysOnTop:true,
    x:100,
    y:100,
  })
  win.webContents.openDevTools();
  win.loadFile(resolve(__dirname,"index.html"))
}

module.exports = {
  createWindow
}