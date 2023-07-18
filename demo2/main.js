const {app,BrowserWindow, ipcMain} = require("electron");
const path = require("path");

const createWindow = ()=>{
  const mainWindow = new BrowserWindow({
    width:400,
    height:400,
    // alwaysOnTop:false,
    x:0,
    y:0,
    // frame:false,
    webPreferences:{
      preload:path.resolve(__dirname,'preload.js'),
      nodeIntegration:true, // 同意 预处理进程使用 node 的模块
    }
  })

  mainWindow.loadFile(path.relative(__dirname,"index.html"))
}


app.whenReady().then(()=>{
  createWindow()
})

ipcMain.on("mainData",(event,value)=>{
  console.log("mainData",value);
  // ipcMain.send("toRender","向渲染进程返回消息")
  BrowserWindow.fromWebContents(event.sender).send("toRender","向渲染进程返回消息")
})

ipcMain.on("setTitle",(event,value)=>{
  BrowserWindow.fromWebContents(event.sender).title = value
})



