var rightbut = document.getElementById('next-btn');
var leftbut = document.getElementById('prev-btn');
var navbtn = document.getElementsByClassName('slide-nav-btn');
var navpic = document.getElementsByClassName('slide-prev');
for(i=0; i<navbtn.length; i++){
navbtn[i].addEventListener('click',navbtnfunc, true);
navpic[i].addEventListener('click', navpickfunc,true);
}
rightbut.addEventListener('click', nextpic);
leftbut.addEventListener('click', backpic);
var counter = 0;/* Номер картинки которая на экране */


function nextpic(){
    let marg = document.getElementById("slidewrapper");
    if(counter==3){
        counter = -1;
    }
    counter+=1;
    for(i=0;i<navbtn.length; i++){
        navpic[i].style = "";
        navbtn[i].style= "";
    }
    console.log(counter);
    navpic[counter].style = "outline: 2px solid black";
    navbtn[counter].style= "border-color:red";
    marg.style.marginLeft = -100*counter +'%';
}

function backpic(){
    let marg = document.getElementById("slidewrapper");
    if(counter==0){
        counter = 4;
    }
    counter-=1;
    for(i=0;i<navbtn.length; i++){
        navpic[i].style = "";
        navbtn[i].style= "";
    }
    navpic[counter].style = "outline: 2px solid black";
    navbtn[counter].style= "border-color:red";
    marg.style.marginLeft = -100*counter +'%';
}

function navbtnfunc(event){
    let marg = document.getElementById("slidewrapper");
    let but = event.target;
counter = parseInt(but.id);
console.log(counter);
marg.style.marginLeft = -100*counter +'%';
for(i=0;i<navbtn.length; i++){
    navpic[i].style = "";
    navbtn[i].style= "";
}
navpic[counter].style = "outline: 2px solid black";
navbtn[counter].style= "border-color:red";
}

function navpickfunc(event){
    let marg = document.getElementById("slidewrapper");
    let pick = event.target;
    counter = parseInt(pick.alt);  
    console.log(counter);
    marg.style.marginLeft = -100*counter +'%';
    for(i=0;i<navbtn.length; i++){
        navpic[i].style = "";
        navbtn[i].style= "";
    }
    event.target.style= "outline: 2px solid black";
    navbtn[counter].style= "border-color:red";
}