/* Задание 1 */
let task1 = document.getElementById("task1");
task1.addEventListener('click', task1func);

function task1func(){
    let check1 = document.getElementById("task1check");
    check1.checked = true;
}

/* Задание 2 */
let task2 = document.getElementById("task2");
task2.addEventListener("click", task2func);

function task2func(){
    let check2 = document.getElementsByName("task2check");
    check2.forEach(element => {
        element.checked = !element.checked;
    });
}
/*Задание 3 */
let task3 = document.getElementsByName("task3radio");
task3.forEach(element => {
    element.addEventListener('click', task3func);
});
function task3func(){
    let p = document.getElementById('task3p');
    task3.forEach(element => {
        if (element.checked){
            p.innerHTML = element.value;
        }
    });
}

/*Задание 4 */
let task4 = document.getElementById('task4check');
task4.addEventListener('change', task4func);
function task4func(event ){
    let but = document.getElementById("task4but");
    if (task4.checked){
        but.className = "show";
    }else{
        but.className = "hide";
    }
}

/* Задание 5 */

let task5 = document.getElementsByClassName("check5");
for( i =0 ; i < task5.length; i++){
    task5[i].addEventListener('click', task5func);
}
function task5func(){
    let p5 = document.getElementsByClassName("p5")
    
    let i = 0;
    for( i =0 ; i < task5.length; i++){
        if (task5[i].checked){
            p5[i].className = "p5 show";
        }
        else{
            p5[i].className = "p5 hide";
        }
    };
}
/* Задание 6 */

let task6 = document.getElementsByClassName("check6");
for( i =0 ; i < task6.length; i++){
    task6[i].addEventListener('click', task6func);
}
function task6func(){
    let p6 = document.getElementById("task6p");
    for(i=0; i<task6.length;i++){
        console.log(task6[i].value)
        if(task6[i].checked){
            p6.className += task6[i].value + " ";

        }else{
            console.log( task6[i].value);
            p6.className = p6.className.split(" ").filter((item) => item != task6[i].value).join(" ");
        }
    }
}
/* Задание 7 */
let task7 = document.getElementById("input7");
task7.addEventListener('blur', task7func);
function task7func(){
    let arr = task7.value;
    let arr1 = arr.split(',');
    arr1.forEach(element => {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.append(element);
        ul.append(li);
    });
}
/* Задание 8 */
let task8 = document.getElementsByClassName("country");
for(var i = 0; i<task8.length; i++){
    task8[i].addEventListener('click', task8func, true);
}

function task8func(event) {
     let ul = event.target.querySelector("ul");
     console.log(ul);
     if(ul.className=="hide"){
         ul.className = "show";
     }
     else{
        ul.className="hide";
     }
}

let select = document.querySelector("select");
select.addEventListener('change',task9func);
/* Задание 9 */
function task9func(event){
    let arr = document.getElementsByClassName("city1");
        if(select.value == "Russia"){
            arr[0].innerHTML = "Moscow";
            arr[1].innerHTML = "Saint Petersburg";
            arr[2].innerHTML = "Kazan";
        }
        if(select.value == "USA"){
            arr[0].innerHTML = "Washington";
            arr[1].innerHTML = "New York";
            arr[2].innerHTML = "Los Angeles";
        }
        if(select.value == "Japan"){
            arr[0].innerHTML = "Tokyo";
            arr[1].innerHTML = "Kyoto";
            arr[2].innerHTML = "Osaka";
        }
    
}

/* Задание 10 */
let but =  document.getElementById("but10");
but.addEventListener('click', task10func);

function task10func(){
    let inp1 = document.getElementById("inpcur");
    let out = document.getElementById("outcur");
    let select1 = document.querySelector("#cur");
    let select2 = document.querySelector("#cur2");
    let current = inp1.value;
    let arr = [0.87, 72.21]
    if(select1.value == "euro"){
        current /= arr[0];
    }else if(select1.value == "rub"){
        current /= arr[1];
    }
    if(select2.value=="euro"){
        current *=arr[0];
    }else if(select2.value=="rub"){
        current*=arr[1];
    }
    out.value = current; 
  console.log(current);
}

let selector = document.getElementById("cur2");
selector.addEventListener('change', task11func);
function task11func(){
    let select1 = document.querySelector("#cur");
    let select2 = document.querySelector("#cur2");
    console.log(select2);
    if(select1.value == select2.value){
        select2.selectedIndex = (select2.selectedIndex+1)%3;
    }
}

let selector1 = document.getElementById("cur");
selector1.addEventListener('change', task12func);
function task12func(){
    let select1 = document.querySelector("#cur");
    let select2 = document.querySelector("#cur2");
    if(select1.value == select2.value){
        select1.selectedIndex = (select1.selectedIndex+1)%3;
    }
}