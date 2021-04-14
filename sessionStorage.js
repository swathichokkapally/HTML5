function add(){
    window.sessionStorage.setItem("cart",JSON.stringify( [{"name":"laptop"},
                                            {"name":"phone"},
                                            {"name":"TV"},
                                            {"name":"fan"},
                                            {"name":"watch"}]) )
};

function fetch(){
    alert( window.sessionStorage.getItem("cart") );
};

function remove(){
    window.sessionStorage.removeItem("cart");
}