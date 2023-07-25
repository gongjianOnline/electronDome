checkBtn.onclick = ()=>{
  const initInput = (value)=>{
    fileInput.value = value
  }
  window.api.checkBtnFun(initInput);
}

saveBtn.onclick = ()=>{
  window.api.saveBtnFun(fileInput.value)
}

