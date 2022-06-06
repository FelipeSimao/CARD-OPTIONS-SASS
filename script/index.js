var selectOption = 0

const vote = {
    validate(event){
        
        if(selectOption === 0){
            event.preventDefault()
            return alert('xeirãno a thu an thu?')
        }
        sessionStorage.setItem('selectOption', selectOption)
    
    },
    changeSelectOption(optionNumber){
        selectOption = optionNumber
    }
}

const app ={

    start(){
        const options = document.querySelectorAll('.options button')
        const button = document.querySelector('#submit-button')
        button.addEventListener('click', vote.validate) 
    
        options.forEach(item => {
            item.addEventListener('click', ()=>{
                vote.changeSelectOption(parseInt(options.textContent))
            })
        })
    }

}

app.start()
