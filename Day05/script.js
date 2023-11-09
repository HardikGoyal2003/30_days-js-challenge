const image=document.querySelector(".container")
let  icon=document.querySelector(".fa-heart")

image.addEventListener('dblclick',(e)=>{

    let xValue=e.clientX-e.target.offsetLeft;
    let yValue=e.clientY-e.target.offsetTop;

    icon.style.left=`${xValue-15}px`
    icon.style.top=`${yValue-15}px`
    
    icon.style.opacity='1'
    
    icon.classList.add('active')
    
    
    setTimeout(() => {
        icon.classList.remove('active')
        icon.style.opacity='0'
    }, 1000);
}

)

    

