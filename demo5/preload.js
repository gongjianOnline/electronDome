const {contextBridge,ipcRenderer} = require("electron")

contextBridge.exposeInMainWorld("api",{
  checkBtnFun:async (callback)=>{
    const result = await ipcRenderer.invoke("checkFile")
    callback(result)
  },
  saveBtnFun:(value)=>{
    ipcRenderer.send("saveFile",value)
  }
})