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

const cursor = document.querySelector(".cursor")
const blur = document.querySelector(".cursor-blur")

document.addEventListener("mousemove",(dets)=>{
cursor.style.left=dets.x+"px"
cursor.style.top=dets.y+"px"

blur.style.left=dets.x-200+"px"
blur.style.top=dets.y-200+"px"
})
