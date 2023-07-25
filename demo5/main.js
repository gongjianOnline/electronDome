const {app,ipcMain, dialog} = require("electron");
const {createWindow} = require("./window")
const fs = require("fs");
const { log } = require("console");

app.whenReady().then(()=>{
  createWindow()
})

ipcMain.handle("checkFile",async (event)=>{
  const {filePaths} = await dialog.showOpenDialog({
    title:"选择文件",
    filters:[{name:"files"}],
    properties:["openFile","multiSelections"]
  })
  return filePaths
})

ipcMain.on("saveFile",async (event,value)=>{
  const {filePath} = await dialog.showSaveDialog({
    title:'保存文件'
  })
  
  fs.readFile(value,'utf8',(err,data)=>{
    if(err){throw err};
    // 写入目标文件
    fs.writeFile(filePath,data,"utf8",(err)=>{
      if(err){throw err}
      dialog.showMessageBox({
        title:'提示信息',
        detail:"文件成功写入"
      })
    })
  })
})