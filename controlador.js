
let select = document.querySelector('select')
let html = document.querySelector('html')

select.addEventListener('change',()=>{
    if(select.value == 'dark'){
        html.classList.add('dark')
    }else{
        html.classList.remove('dark')
    }
})

