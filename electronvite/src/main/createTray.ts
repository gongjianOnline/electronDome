import { Menu, Tray } from 'electron'
import path from "path"

const createTray = ()=>{
  const tray = new Tray(path.resolve(__dirname,"../../resources/icon.png"));
  const contextMenu = Menu.buildFromTemplate([{ label: '退出', role: 'quit' }])
  tray.setToolTip('hello electron')
  tray.setContextMenu(contextMenu)
}

export  {createTray}