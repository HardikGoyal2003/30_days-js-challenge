const scriptURL = 'https://script.google.com/macros/s/AKfycbz4lal4rcMosdy4RaYf5F1z43hKqmfd6WgvOj7PDzVacvpcd1iPxay96YTDPY1xUvGaBA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        document.querySelector("#done").innerHTML="Thanks For Subscribing "    
        
        setTimeout(() => {
        document.querySelector("#done").innerHTML=" "; 
        form.reset()
        }, 2000);
    })
    .catch(error => console.error('Error!', error.message))
    
    
})