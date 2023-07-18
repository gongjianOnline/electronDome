toMainBtn.onclick = function(){
  window.api.getMainData()
  console.log(window);
}

titleBtn.onclick = function(){
  console.log(title.value);
  window.api.setTitle(title.value)
}