const search_form=document.getElementById('search')
const search_box=document.getElementById('search_box')
const search_result=document.getElementById('result')
const show_btn=document.getElementById('show_more')

const access = "Your_API_Key"

let keyword =""
let page=1

async function Images() {
        keyword=search_box.value
        const url= `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access}&per_page=12`
        
        const response =await fetch(url)
        const data= await response.json()

        results=data.results

        if (page==1) {
                search_result.innerHTML=''
        }
        results.map((result)=>{
                const image=document.createElement('img')
                image.src=result.urls.small
                const imagelink=document.createElement('a')
                imagelink.href=result.links.download
                imagelink.target="_blank"
                imagelink.appendChild(image)
                search_result.appendChild(imagelink)
        })

        show_btn.style.display="block"
}

search_form.addEventListener('submit',(e)=>{
        console.log('hello')
        e.preventDefault()
        page=1
        Images()
})

show_btn.addEventListener('click',()=>{
        page++
        Images()
})