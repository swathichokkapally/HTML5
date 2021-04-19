this.onmessage = function(e){
    if( e.data.add !=undefined ){
        let addition = e.data.add.num1 + e.data.add.num2;
        this.postMessage(addition);
    }
}