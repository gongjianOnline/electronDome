const menu = [
  {
    label: 'File',
    submenu: [
      { 
        label: 'New', 
        accelerator: 'CmdOrCtrl+N', 
        click: () => { /* 处理点击事件 */ } 
      },
      { 
        label: 'Open', 
        accelerator: 'CmdOrCtrl+O', 
        click: () => { /* 处理点击事件 */ } 
      },
      { 
        type: 'separator' 
      },
      { 
        label: 'Quit', 
        accelerator: 'CmdOrCtrl+Q', 
        click: () => { /* 处理点击事件 */ } 
      }
    ]
  },
  // 其他菜单项...
];

module.exports = menu;