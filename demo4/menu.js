const {app,Menu,dialog} = require("electron")

const crateMenu = ()=>{
  const menu = [
    {
      label:'退出',
      click:async()=>{ 
        /**
         * result 返回一个对象 
         *  response 表示 buttons 中点击的下标
         *  checkboxChecked 表示 checkboxLabel 属性是否被勾选
         */
        const result = await dialog.showMessageBox({
          title:'提示',
          detail:'确认要退出吗',
          buttons:["取消","确定"],
          cancelId:0, // 按下 esc 时走 取消 选项
          checkboxLabel:"记住我的选择"
        })
        console.log(result);
        if(!result.checkboxChecked){
          dialog.showErrorBox("温馨提示","下次将不在提示退出弹窗")
        }
        if(result.response == 1){app.quit()}
      }
    }
  ]
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
}
module.exports = {crateMenu}


