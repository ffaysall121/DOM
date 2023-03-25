let addtx = document.querySelector("#inputBox");
let delet = document.querySelector("#delete");
let pending = document.querySelector("#pending");
let clist = document.querySelector("#clist");
let plist = document.querySelector("#plist");

document.getElementById("#addItem").addEventListener("click",createItem())

let createItem = function(tx){
    console.log("ok");
    let cli= document.createElement("li");
    let ckbx = document.createElement("input");
    let tx = document.createElement("span");
    let btn = document.createElement("button");

    tx.innerText=tex;
    ckbx.type='checkbox';
    btn.className="btn";

    cli.appendChild(ckbx);
    cli.appendChild(tx);
    cli.appendChild(btn);

    return cli;

}

let addtask = function(event) {
    event.preventDefault();
    let ck =addtx.value.trim();
    if( ck.length> 2) {
        let addItem = createItem(add.value);

    }
    else {
        alert("add task");
    }
    
}