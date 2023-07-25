const {app} = require("electron")
const {createWindow} = require("./window")
const {crateMenu} = require("./menu")

app.whenReady().then(()=>{
  createWindow();
  crateMenu();
})