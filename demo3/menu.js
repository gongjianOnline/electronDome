const {Menu} = require("electron");
const createMenu = (win)=>{
  const menu = [
    {
      label: '文件',
      submenu: [
        { 
          label: '新建窗口', 
          accelerator: 'CmdOrCtrl+N', 
          click: () => { 
            win.webContents.send("handelMenu","this is handelMenuFun")
          } 
        },
        { 
          label: '打开新窗口', 
          accelerator: 'CmdOrCtrl+O', 
          click: () => { /* 处理点击事件 */ } 
        },
        { 
          type: 'separator' 
        },
        { 
          label: '退出', 
          accelerator: 'CmdOrCtrl+Q', 
          click: () => { /* 处理点击事件 */ } 
        }
      ]
    },
    // 其他菜单项...
  ];
  const applicationMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(applicationMenu);
}

module.exports = createMenu;