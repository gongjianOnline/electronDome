const {ipc, ipcRenderer} = require("electron")

window.api = {
  test:()=>{console.log("testAPI");},
}


ipcRenderer.on("handelMenu",(event,value)=>{
  console.log(value);
  contentContainer.innerHTML = value;
})

window.addEventListener("contextmenu",()=>{
  console.log("右键测试");
  ipcRenderer.send("handelContextmenu")
})

