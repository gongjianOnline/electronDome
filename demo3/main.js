const {app,BrowserWindow, ipcMain} = require("electron");
const path = require("path");
const {createWindow} = require("./window.js")
const createMenu = require("./menu");


// const createWindow = ()=>{
//   const mainWindow = new BrowserWindow({
//     width:400,
//     height:400,
//     // alwaysOnTop:false,
//     x:0,
//     y:0,
//     // frame:false,
//     webPreferences:{
//       preload:path.resolve(__dirname,'preload.js'),
//       nodeIntegration:true, // 同意 预处理进程使用 node 的模块
//     }
//   })

//   mainWindow.loadFile(path.relative(__dirname,"index.html"))
// }


app.whenReady().then(()=>{
  var window = createWindow()
  createMenu(window)
})


