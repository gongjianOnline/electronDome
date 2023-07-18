  const testFun = (event,value)=>{
    testContainer.innerHTML = Number(testContainer.innerHTML) + value;
  }
  window.api.test(testFun)
