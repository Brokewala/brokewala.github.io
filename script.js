let array=["React/React Native Dev","Developpeur Full-stack",'MERN stack developpeur'];
let wordIndex=0;
let lettterIndex=0;
const createletter=()=>{
    const target=document.getElementById("target");
    const letter=document.createElement("span")
    target.appendChild(letter);
    letter.textContent=array[wordIndex][lettterIndex]

    setTimeout(()=>{
        letter.remove();
    },2800);
}
const loop=()=>{
   
    setTimeout(() => {
        if (wordIndex>=array.length) {
            wordIndex=0;
            lettterIndex=0;
            loop();
        }else if (lettterIndex<array[0].length) {
            createletter();
            lettterIndex++;
            loop()
        }else{
            wordIndex++
            lettterIndex=0;
            setTimeout(() => {
                loop()
            }, 2800);
           
        }
    }, 50);
}
loop()
// mouse
let mouseCursor=document.querySelector("#mouse")
window.addEventListener("mousemove",(e)=>{
    mouseCursor.style.left=e.pageX+"px";
    mouseCursor.style.top=e.pageY+"px";
})

// for link
let navLinks=document.querySelectorAll(".links");
navLinks.forEach(link=>{
    link.addEventListener("mouseover",()=>{
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    })
    link.addEventListener("mouseleave",()=>{
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    })
});
// 
let noneBack=document.querySelectorAll(".noneBack");
noneBack.forEach(link=>{
    link.addEventListener("mouseover",()=>{
        mouseCursor.style.backdropFilter="none"
    })
});