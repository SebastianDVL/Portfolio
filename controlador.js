
let select = document.querySelector('select')
let html = document.querySelector('html')

select.addEventListener('change',()=>{
    if(select.value == 'dark'){
        html.classList.add('dark')
    }else{
        html.classList.remove('dark')
    }
})
function requestUserRepos(username){
    
   const xhr = new XMLHttpRequest();   
    const url = `https://api.github.com/users/${username}/repos`;
    
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
    
        const data = JSON.parse(this.response);
        
    
    }
    
    // Send the request to the server
    xhr.send();
    
}

// Call function passing in 'facebook' as GitHub username
requestUserRepos('SebastianDvl');

