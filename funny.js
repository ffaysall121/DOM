const bby = document.querySelector("#bby");
const img = document.querySelector("#im");

img.addEventListener('mouseover',(event)=>{
    
    img.setAttribute('src', './funnyImageGif/emojilaugh-emoji.gif');
   
})
img.addEventListener('mouseout',(event)=>{
    
    img.setAttribute('src', './funnyImageGif/210-smiley-emoji-animated-gif-with-sad-and-crying-face-emotional.gif');
   
})