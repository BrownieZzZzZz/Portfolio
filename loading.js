const animationDivs = document.querySelectorAll('.child-div');
const mainDiv = document.querySelector('.container');

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

function myLoad(){
    setTimeout(() =>{
        if(!isMobile()){
            let delay = 100
            mainDiv.style.flexDirection = 'row';
            animationDivs.forEach( (element) =>{
                element.style.transform = 'translateY(0)';
                element.style.transition = 'transform 0.7s';
                element.style.transitionDelay = delay + 'ms';
                delay += 100;
            })
            setTimeout( () =>{
                window.location.href = 'main.html'
            }, 1900)
        }
        else{
            let delay = 100
            mainDiv.style.flexDirection = 'column';
            animationDivs.forEach( (element) =>{
                element.style.transform = 'translateX(0)';
                element.style.transition = 'transform 0.7s';
                element.style.transitionDelay = delay + 'ms';
                delay += 100;
            })
            setTimeout( () =>{
                window.location.href = 'main.html'
            }, 1900)
        }
    })
}

function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}














button.addEventListener('click', async () => {
    const data = await fetch(URL, {
        method: 'POST'
    });
    console.log(data);
})