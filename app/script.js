var menu = document.querySelector('.menu'),

function tabs(){
    console.log("exec")
    var li = menu.querySelector('li');

    li.addEventListener('click', function(e){
        for(let i=0; i<=li.length; i++){
            li[i].classList.remove("active")
        }
        e.target.classList.add("active")
    })
}



document.addEventListener("DOMContentLoaded", funciton(){
    tabs()
})