
let select = document.querySelector('select')
let html = document.querySelector('html')

select.addEventListener('change',()=>{
    if(select.value == 'dark'){
        html.classList.add('dark')
    }else{
        html.classList.remove('dark')
    }
})

let cards = document.querySelectorAll('.gap-6 .group')

let observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle('opacity-100',entry.isIntersecting)
        entry.target.classList.toggle('translate-x-0',entry.isIntersecting)
        
    })
},
{
    threshold :0.3,
})

cards.forEach(card=>{
    observer.observe(card)
})
