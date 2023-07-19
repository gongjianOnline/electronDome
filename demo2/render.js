toMainBtn.onclick = function(){
  window.api.getMainData()
  console.log(window);
}

titleBtn.onclick = function(){
  console.log(title.value);
  window.api.setTitle(title.value)
}

invokeBtn.onclick =async function(){
  const result =await window.api.testInvoke("测试 Invoke 渲染进程向主进程通信");
  console.log(result);
} 