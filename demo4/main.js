const {app} = require("electron")
const {createWindow} = require("./window")

app.whenReady().then(async ()=>{
  await createWindow();
})