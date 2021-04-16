this.onmessage = function(e){
    let result = e.data.addition.num1+e.data.addition.num2;
    this.postMessage(result);
};