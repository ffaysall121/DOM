// document.body.contentEditable = true;
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


//parent to children
const parent = document.querySelector("#bdy");
const children = parent.children;
console.log(children[1])


const grandParent = document.querySelector("#bdy");
// const newparent = grandParent.children;
// const newchildren = newparent[1].children;
const newchildren = grandParent.querySelectorAll(".item");
console.log(newchildren)
//child to grand parent
const cld = document.querySelector("#hdr");
const prn = cld.parentElement;
console.log(prn);

//child to grand parent 2nd way 
const cl = document.querySelector('.itm');
const gp = cl.closest('#bdy')
console.log(gp);

//next siblings selector 
const s1 = document.querySelector('.itm');
const s2 = s1.nextElementSibling;
const s3 = s2.previousElementSibling;
console.log(s2.innerHTML);
console.log(s3.innerHTML);


//........create html element using javascript..........

const divElement = document.createElement('div');
divElement.className = 'content';
divElement.setAttribute('id', 'content');
divElement.setAttribute('title', 'navigation');


const cnt = document.querySelector("#bdy");
const hd = document.querySelector("#hdr");
cnt.insertBefore(divElement,hd);
const footer = document.createElement('h2');
// cnt.appendChild(footer);//add as a last child to the parent as html element and only one child can added
cnt.append('Faysal Ahmed',footer);//add as a last child to the parent and add html one more element,text at a time

 

//............. event listener...........

//....................button event..............
const handleClick = document.querySelector("#btn")
handleClick.addEventListener('click',(event)=>{
       console.log(event)
        document.querySelector("#btn").style.padding="10px";

    //    document.querySelector("#btn").style.backgroundColor="yellow";
    
   
})
handleClick.addEventListener('dblclick',(event)=>{
    console.log(event)
    document.querySelector("#btn").style.padding="50px";
   
})


handleClick.addEventListener('mousedown',(event)=>{
    
    document.querySelector("#btn").style.backgroundColor="gray";
   
})

handleClick.addEventListener('mouseup',(event)=>{
    
    document.querySelector("#btn").style.backgroundColor="green";
   
})

// handleClick.addEventListener('mouseenter',(event)=>{
    
//     document.querySelector("#btn").style.border="10px solid red";
   
// })

// handleClick.addEventListener('mouseleave',(event)=>{
    
//     document.querySelector("#btn").style.border="10px solid blue";
   
// })
handleClick.addEventListener('mouseover',(event)=>{
    
    document.querySelector("#btn").style.border="10px solid blue";
   
})
handleClick.addEventListener('mouseout',(event)=>{
    
    document.querySelector("#btn").style.border="10px solid yellow";
   
})
handleClick.addEventListener('mousemove',(event)=>{
    
    console.log(event);
   
})

//....................input event..............

// const inputKeys = document.querySelector("#ipt");
// inputKeys.addEventListener('keydown',(event)=>{
//  console.log(event);
// })
// inputKeys.addEventListener('keyup',(event)=>{
//     console.log(event);
// })
// inputKeys.addEventListener('keypress',(event)=>{
//     console.log(event);
// })
// inputKeys.addEventListener('focus',(event)=>{
//     console.log(event);
// })
// inputKeys.addEventListener('blur',(event)=>{
//     console.log(event);
// })
// inputKeys.addEventListener('cut',(event)=>{
//     console.log(event);
// })
// inputKeys.addEventListener('paste',(event)=>{
//     console.log(event);
// })
// inputKeys.addEventListener('input',(event)=>{
//     console.log(event);
// })
// inputKeys.addEventListener('input',(event)=>{
//     console.log(event.target);
// })
// inputKeys.addEventListener('input',(event)=>{
//     console.log(event.target.value);
// })

const btnClick = document.querySelector("#btn")

btnClick.addEventListener('submit',(event)=>{
    // event.preventDefault();
    console.log(event.target);
    console.log(event.target.value);
})