/**主进程 */
const {app,BrowserWindow, ipcMain} = require("electron")
const path = require("path")
const createWindows = ()=>{
  const mainWindow = new BrowserWindow({
    width:200,
    height:200,
    alwaysOnTop:false, // 是否置顶
    x:0, // 窗口的x轴位置
    y:100, // 窗口的y轴位置
    frame:false, // 隐藏标题栏
    // transparent:true, // 背景透明
    /**指定预加载脚本，用于主线程和渲染线程通信 */
    webPreferences:{
      preload:path.resolve(__dirname,'preload.js'),
      nodeIntegration:true, // 同意 预处理进程使用 node 的模块
    }
  })
  // 网页套壳
  // mainWindow.loadURL("http://www.gjweb.top")
  // 解析项目文件
  mainWindow.loadFile(path.resolve(__dirname,"index.html"))
  
  // mainWindow 表示当前窗口的对象,通过 webContents 可以获取渲染进程中的对象(获取通信的方式也是通过预处理器来传递的,所有 webContents 也可以调用到 preload 中的内容)
  mainWindow.webContents.send("test",15);

  // 自动打开开发者工具
  mainWindow.webContents.openDevTools()
}


app.whenReady().then(()=>{
  createWindows();

  /** 判断操作系统*/
  app.on("window-all-closed",()=>{
    // 如果不是 windows 系统， 关闭软件的时候为退出APP
    if(process.platform != "darwin"){
      app.quit();
    }

    app.on("activate",()=>{
      createWindows();
    })
  })

})

/**预加载处理器 和 主进程通信 */
ipcMain.on("saveFile",(params)=>{
  console.log("saveFile");
})

/**主进程--->预加载处理器--->渲染进程 */

