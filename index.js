var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');
var menu = document.querySelector(".menu");
const scriptURL = 'https://script.google.com/macros/s/AKfycbzMqpXxW0owSd9UVlhm0nCnOAfaMKtTU3K-iImeat0VTnF3jmUbQKXz6RQf1TZTk5zDYQ/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById('confirm-message');
const hiddenElements = document.querySelectorAll('.hide');

function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove('active-link');
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');


}

function openMenu(){
    menu.style.right = "0"
}

function closeMenu(){
    menu.style.right = "-200px";
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.remove('hide');
            entry.target.classList.add('show');
            if(entry.target.id == 'about-col-2'){
                if(window.innerWidth < 600) {
                    console.log('hello');
                    entry.target.classList.remove('hover:shadow-red-950', 'hover:shadow-lg', 'hover:scale-105');
                    entry.target.classList.add('scale-105', 'shadow-lg', 'shadow-red-950');
                }
            }
        }
        else {
            entry.target.classList.add('hide');
            entry.target.classList.remove('show');
            if(entry.target.id == 'about-col-2'){
                if(window.innerWidth < 600) {
                    entry.target.classList.remove('scale-105', 'shadow-lg', 'shadow-red-950');
                }
            }
        }
    });
});
hiddenElements.forEach((element) => observer.observe(element));


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        message.classList.add('active');
        setTimeout(() =>{
            message.classList.remove('active');
        }, 5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

