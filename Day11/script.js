let lists=document.getElementsByClassName('list')
let r_box=document.getElementById('right')
let l_box=document.getElementById('left')

for(x of lists){
    x.addEventListener('dragstart',function (e) {
        let selected =e.target
        
        r_box.addEventListener('dragover',function (e) {
            e.preventDefault()            
        })

        r_box.addEventListener('drop',function(e){
            r_box.appendChild(selected)
            selected=null
        })
         
        l_box.addEventListener('dragover',function (e) {
            e.preventDefault()            
        })

        l_box.addEventListener('drop',function(e){
            l_box.appendChild(selected)
            selected=null
        })
    })
}