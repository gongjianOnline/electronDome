/**创建右键菜单 */
const {ipcMain, Menu, BrowserWindow} = require('electron')

ipcMain.on("handelContextmenu",(event)=>{
  const template = [
    {
      label:"退出",
      click:()=>console.log("退出应用")
    }
  ]
  const menu = Menu.buildFromTemplate(template)
  menu.popup(BrowserWindow.fromWebContents(event.sender))
})