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
    console.log(event);
    let but = document.getElementById("task4but");
    if (task4.checked){
        console.log("2");
        but.className = "show";
    }else{
        console.log("3");
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
     if(ul.className=="countries_off"){
         ul.className = "countries_on";
     }
     else{
        ul.className="countries_off";
     }
}

let select = document.querySelector("select");
select.addEventListener('change',task9func);
/* Задание 9 */
function task9func(event){
    let arr = document.getElementsByClassName("city1");
    console.dir(select);
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
