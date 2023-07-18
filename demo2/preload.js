const {ipcRenderer,contextBridge} = require("electron");

contextBridge.exposeInMainWorld("api",{
  getMainData:()=>{
    ipcRenderer.send("mainData","向主进程发送信息")
  }
})

ipcRenderer.on("toRender",(event,value)=>{
  console.log(value)
})

