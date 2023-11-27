let speech = new SpeechSynthesisUtterance()
let voice=[]
let playBtn = document.querySelector('.mainBtn')
let voice_select=document.querySelector('select')

window.speechSynthesis.onvoiceschanged=()=>{
        voice=window.speechSynthesis.getVoices()
        speech.voice= voice[0]

        voice.forEach((v,i)=>{
                voice_select.options[i] = new Option(v.name,i)
        })
}

voice_select.addEventListener('change',()=>{
        speech.voice = voice[voice_select.value]
})

playBtn.addEventListener('click',()=>{
       
        if (document.querySelector('textarea').value!=='') {
                
                if(playBtn.classList.contains('play')){
        
                        if (window.speechSynthesis.paused) {
                                window.speechSynthesis.resume()
                        }
        
                        playBtn.classList.add('pause')
                        playBtn.classList.remove('play')
                        playBtn.innerHTML=`<img src="images/pause.png">Pause`
                        speech.text=document.querySelector('textarea').value
                        window.speechSynthesis.speak(speech)
                }
                
                else if(playBtn.classList.contains('pause')){
                        window.speechSynthesis.pause()
                        playBtn.classList.remove('pause')
                        playBtn.classList.add('play')
                        playBtn.innerHTML=`<img src="images/play.png">Listen`
                }
        }
        
        
})

window.speechSynthesis.onend=()=>{
        playBtn.classList.remove('pause')
        playBtn.classList.add('play')
        playBtn.innerHTML=`<img src="images/play.png">Listen`
}

document.querySelector('.stop').addEventListener('click',()=>{
        document.querySelector('textarea').value=''
        window.speechSynthesis.cancel()
        playBtn.classList.remove('pause')
        playBtn.classList.add('play')
        playBtn.innerHTML=`<img src="images/play.png">Listen`
        
})