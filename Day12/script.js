const input_box=document.getElementById('input_box')
const list_parent=document.getElementById('list')
const input_parent=document.querySelector('.row')

function add_task() {
    if(input_box.value===''){
        input_parent.classList.add('shake')
        
        setTimeout(() => {
            input_parent.classList.remove('shake')
        }, 1000);
    }

    else{
        let li=document.createElement('li')
        li.innerHTML=input_box.value
        list_parent.appendChild(li)
        let span=document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    input_box.value=''
    save_data()
}

list_parent.addEventListener('click',function (e) {
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked')
        save_data()
    }
    
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        save_data()
    }
    
},false)

function save_data() {
    localStorage.setItem('data',list_parent.innerHTML)
}

function save_load() {
    list_parent.innerHTML=localStorage.getItem('data')
}

save_load()