/**
 * 预处理脚本中,可以使用一部分 node 和 electron 的模块,因为预基本处理是主进程和渲染进程的桥梁, 为了安全角度考虑所以不能全使用全部功能
 * 要想想使用 node 和 electron 的全部功能需要 主进程和渲染进程直接通信,这样牺牲一定的安全性
 */
const { log } = require("console");
const { ipcMain, ipcRenderer } = require("electron");
const { contextBridge } = require("electron");
const fs = require("fs")
/**向主线程发送信息 */
// ipcRenderer.send("saveFile","hello main")

/**
 * 创建供渲染进程访问的函数 
 * 使用渲染进程可以直接通过 window 获取 api 里面的函数方法
 * */
contextBridge.exposeInMainWorld('api',{
  hd:()=>{
    ipcRenderer.send("saveFile","hello main")
  },
  test:(callback)=>{
    // testContainer.innerHTML = Number(testContainer.innerHTML) + 10;
    ipcRenderer.on('test', callback)
  }
})

/**预加载进程操作渲染进程中的 dom 对象 */
window.addEventListener('DOMContentLoaded',()=>{
  for(const app of ['chrome','electron','node']){
    const el = document.querySelector(`#${app}`)
    el.innerHTML = `${app}  版本号 ${process.versions[app]}`
  } 
})

// ipcRenderer.on("test",(event,value)=>{
//   testContainer.innerHTML = Number(testContainer.innerHTML) + value;
// })