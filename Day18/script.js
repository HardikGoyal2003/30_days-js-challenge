let scroll_contain=document.querySelector('.gallery')
let backbtn=document.getElementById('backbtn')
let nextbtn=document.getElementById('nextbtn')

scroll_contain.addEventListener('wheel',(e)=>{
    e.preventDefault()
    scroll_contain.scrollLeft+=e.deltaY
    scroll_contain.style.scrollBehavior="auto"
})

nextbtn.addEventListener('click',()=>{
    scroll_contain.style.scrollBehavior="smooth"
    scroll_contain.scrollLeft+=900
})

backbtn.addEventListener('click',()=>{
    scroll_contain.scrollLeft-=900
})