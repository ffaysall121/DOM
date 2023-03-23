document.body.contentEditable = true;
// console.log(document.all);
//document.all look like Array But its not Array,its a one kind of list
// console.log(typeof(document.all));
console.log(document.images);


//############## selector #############

//element selector and different
let header = document.getElementById("hdr");
header.style.backgroundColor ="yellow";
header.style.display="inline";
// console.log(header);
console.log(header.innerHTML);//return html element and contents
console.log(header.textContent);//return html contents value
console.log(header.innerText);//return html contents value which is visible in display..that means final output


let allitemh1=document.getElementsByTagName("h1");
for (i=0;i<allitemh1.length;i++) {

    allitemh1[i].style.color = "red";
}


let itms = document.getElementById("itms");//select id  element
// let itm = itms.getElementsByClassName("itm");// select id inner element by class name

let itm = document.getElementsByClassName("itm")//select all the elements by class name
for (i=0;i<itm.length;i++) {

    itm[i].style.color = "yellow";
}



//--------------------query selector--------------
//query selector always selects first match.
let last = document.querySelector(".itm:last-child");//just select first match of last child
last.style.color = "green";
let al = document.querySelectorAll(".itm:last-child")
////just select all match of last child
for (const i of al) {
    i.style.fontSize = "50px";
}

let sp = document.querySelector(".itm:nth-child(1)");
sp.style.backgroundColor="blue";
let spAll = document.querySelectorAll(".itm:nth-child(1)");
for (const i of spAll) {
    i.style.textTransform = "uppercase";
}

//parent and children select
const parent = document.querySelector("bdy");
const children = parent.children;
console.log(children)


