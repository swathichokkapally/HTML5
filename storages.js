function add(){
    
   let obj = {"uname": document.getElementById("uname").value,
              "upwd":  document.getElementById("upwd").value };
    
   //local storage
   //store the data
   window.localStorage.setItem("login_details",JSON.stringify(obj));


  

};

function read(){
    alert( window.localStorage.getItem("login_details") );
};

function delData(){
    window.localStorage.clear();
};