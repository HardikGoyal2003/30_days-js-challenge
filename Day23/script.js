const notes_contain=document.querySelector('.notes_parent')

function store(){
        localStorage.setItem('notes', notes_contain.innerHTML)        
}

function show(){
        notes_contain.innerHTML=localStorage.getItem('notes')
}

show()

document.addEventListener('keydown',event=>{
        if (event.key==='Enter') {
                document.execCommand('insertLineBreak')
                event.preventDefault()
        }
})

document.querySelector('button').addEventListener('click',()=>{
        let input_b = document.createElement('p')
        let img = document.createElement('img')
        input_b.className = 'input_box'
        input_b.setAttribute('contenteditable','true')
        img.src='images/delete.png'
        notes_contain.appendChild(input_b).appendChild(img)
        store()
})

notes_contain.addEventListener('click',function(e){
        if (e.target.tagName=='IMG'){
                e.target.parentElement.remove()
                store()
        }        
        
        else if (e.target.tagName=='P') {
                notes=document.querySelectorAll('.input_box')
                notes.forEach(i=>{
                      i.onkeyup=()=>store()  
                })
        }
})