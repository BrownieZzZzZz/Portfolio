var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');
var menu = document.querySelector(".menu");
const scriptURL = 'https://script.google.com/macros/s/AKfycbzMqpXxW0owSd9UVlhm0nCnOAfaMKtTU3K-iImeat0VTnF3jmUbQKXz6RQf1TZTk5zDYQ/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById('confirm-message');
const hiddenElements = document.querySelectorAll('.hide');
const phoneElements = document.querySelectorAll('.phone-element');
const blob = document.querySelector('.blob');
const animationDivs = document.querySelectorAll('.child-div');
const animationDiv = document.querySelector('.animation-container');
const mainContainer = document.querySelector('.main-container');

if(!isMobile()){
    animationDivs.forEach( (element) => {
        element.style.transform = 'translateY(-100%)';
        element.style.backgroundColor = '#080808' ;
    })
}
else{
    animationDivs.forEach( (element) => {
        element.style.height = '12.5vh';
        element.style.width = '100vw';
        element.style.boxShadow =  '1px 1px 1px 1px #080808';
        element.style.transform = 'translateX(-101%)';
        element.style.backgroundColor = '#080808' ;
    })
}

function animationLoad(){
    document.body.style
    if(!isMobile()){
        let delay = 100
        animationDiv.style.flexDirection = 'row';
        animationDivs.forEach( (element) =>{
            element.style.transform = 'translateY(0)';
            element.style.transition = 'transform 0.7s';
            element.style.transitionDelay = delay + 'ms';
            delay += 100;
        })
        setTimeout( () =>{
            animationDiv.remove();
        }, 1900)
    }
    else{
        let delay = 100
        animationDiv.style.flexDirection = 'column';
        animationDivs.forEach( (element) =>{
            element.style.transform = 'translateX(0)';
            element.style.transition = 'transform 0.7s';
            element.style.transitionDelay = delay + 'ms';
            delay += 100;
        })
        setTimeout( () =>{
            animationDiv.remove();
        }, 1900)
    }
}







const elementOptions = {
}
const phoneOptions = {
    threshold: 0.8
}
const aboutDiv = document.querySelector('#about-col-2');
const aboutImage = document.querySelector('#gradientImage')






// THEME COLOURS & COLOUR WEIGHT & SHADOW SIZE:
const colours = {
    'red': ['#ff004f', '#b54769'],
    'blue': ['#2c1ec9', '#0c69d3'],
    'cyan': ['#40f7d0', '#93fae4'],
    'purple': ['#b841f0', '#c88ae6'],
    'yellow': ['#d9c709', '#fff159'],
    'orange': ['#ff9830', '#f5aa5d'],
    'green': ['#6df768', '#9bf598']
}

coloursList = ['red', 'blue', 'cyan', 'purple', 'yellow', 'orange', 'green'];


const colour = coloursList[Math.floor( Math.random() * 7)];
const colourWeight = '500';
const shadowSize = 'sm';
const r = document.querySelector(':root');
const rs = getComputedStyle(r);
const scroll = document.querySelector('::-webkit-scrollbar-track');




function pageLoad(){
    setTimeout(() =>{
        mainContainer.style.display = 'block';
        aboutDiv.classList.add('hover:shadow-' + colour + '-' + colourWeight, 'hover:shadow-' + shadowSize);
        r.style.setProperty('--primary', colours[colour][0])
        r.style.setProperty('--secondary', colours[colour][1])
        blob.classList.remove('blob-hide');
        blob.style.fill = rs.getPropertyValue('--primary');
        phoneElements.forEach( (element) => phoneObserver.observe(element));
        hiddenElements.forEach( (element) => observer.observe(element));

    }, 2000)
}

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
    menu.style.right = "-400px";
}


function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.remove('hide');
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.add('hide');
            entry.target.classList.remove('show');
        }
    });
}, elementOptions);


const phoneObserver = new IntersectionObserver( (entries) =>{
    entries.forEach( (entry) => {
        if(entry.isIntersecting) {
            if(entry.target.id == 'about-col-2'){
                if(isMobile()) {
                    entry.target.classList.remove('hover:shadow-' + colour + '-' + colourWeight, 'hover:shadow-' + shadowSize, 'hover:scale-105');
                    entry.target.classList.add('scale-105', 'shadow-' + shadowSize, 'shadow-' + colour + '-' + colourWeight);
                }
            }
            if(entry.target.id == 'service-1' || entry.target.id == 'service-2'){
                if(isMobile()) {
                    entry.target.classList.remove('service-tile');
                    entry.target.classList.add('service-tile-phone');
                }
            }
        }

        else {
            if(entry.target.id == 'about-col-2'){
                if(isMobile()) {
                    entry.target.classList.remove('scale-105', 'shadow-' + shadowSize, 'shadow-' + colour + '-'+ colourWeight);
                }
            }
            if(entry.target.id == 'service-1' || entry.target.id == 'service-2'){
                if(isMobile()) {
                    entry.target.classList.remove('service-tile-phone');
                }
            }
        }
    })
}, phoneOptions)

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

