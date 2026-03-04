window.onload = () => {
setTimeout(()=>{
document.getElementById("loader").style.display="none"
},1200)
}

/* scroll reveal */

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity=1
entry.target.style.transform="translateY(0)"
}
})
})

document.querySelectorAll("section").forEach(sec=>{
sec.style.opacity=0
sec.style.transform="translateY(60px)"
observer.observe(sec)
})

const blur = document.querySelector(".cursor-blur")

document.addEventListener("mousemove",(e)=>{

blur.style.left = e.x - 200 + "px"
blur.style.top = e.y - 200 + "px"

})

let lastScroll = 0
const navbar = document.querySelector("nav")

window.addEventListener("scroll", () => {

const currentScroll = window.pageYOffset

if(currentScroll > lastScroll){
navbar.classList.add("nav-hidden")
}else{
navbar.classList.remove("nav-hidden")
}

lastScroll = currentScroll

})
