const scriptURL = 'https://script.google.com/macros/s/AKfycbw2Www1TxeJg-WdLFcFkVtdPQot4oE6EFTeTvbv7kLDCysQT8t6JzBZrqzN0EzpGFxa8g/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML= "Messagae sent successfully"
            setTimeout(function(){
                mag,innerHTML= ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })