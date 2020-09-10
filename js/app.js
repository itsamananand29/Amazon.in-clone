//This is to apply hover on the top nav bar 

let navTr =document.querySelectorAll('.nav-bar-top a')
// console.log(navTr);
for(let i = 0;i < navTr.length;i++){
    
navTr[i].addEventListener('mouseenter',function(){
    if(i == 2){}
    else{
        navTr[i].style.border='1px solid white';}
});

navTr[i].addEventListener('mouseleave',function(){
    if (i == 0){
        navTr[i].style.border='1px solid #b3c4eb';    
        navTr[i].style.borderRadius='2px';
    }
    else if(i==2){}
    else{
        navTr[i].style.border='1px solid #0f1217';}
    });
    
}   
let navBl = document.querySelector('.nav-bar-bottom .nav-left') ;
// console.log(navBl);
navBl.addEventListener('mouseenter',function(){
    navBl.style.border='1px solid white';
})
navBl.addEventListener('mouseleave',function(){
    navBl.style.border='1px solid #232f3e';
})
let navBr = document.querySelector('.nav-bar-bottom .nav-right a img') ;
console.log(navBr);
navBr.addEventListener('mouseenter',function(){
    navBr.style.border='1px solid white';
});
navBr.addEventListener('mouseleave',function(){
    navBr.style.border='1px solid #232f3e';
});
let navBc =document.querySelectorAll('.nav-center .line-2');
for(let i = 0 ; i < navBc.length ; i++){
    navBc[i].addEventListener('mouseenter',function(){
        navBc[i].style.border='1px solid white';
        navBc[i].style.borderRadius='2px';
    });
    navBc[i].addEventListener('mouseleave',function(){
        navBc[i].style.border='1px solid #232f3e';
    });
}