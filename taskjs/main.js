/*задание 1*/
let but = document.getElementById('button');
but.addEventListener('click', sumFunc);


function sumFunc(){
    sum=0;
    let elements = document.getElementsByClassName('calc');
    for(var i =0; i < elements.length; i++){
        sum+= +elements[i].value;
    }
    let sumInput = document.getElementById('output');
    sumInput.value=sum;
}   
/*задание2*/
let but2 = document.getElementById('button1');
but2.addEventListener('click', sumFunc2);

function sumFunc2(){
    sum=0;
    let elements = document.getElementsByClassName('calc1');
    for(var i =0; i < elements.length; i++){
        sum+= +elements[i].value;
    }
    let sumInput = document.getElementById('result');

    sumInput.innerHTML=sum;
    console.log(sumInput);
}   
/*задание3*/
let inpblur = document.getElementsByClassName('sumblur');
inpblur[0].addEventListener('blur', sumNum);

function sumNum(){
    var numb = inpblur[0].value;
    var sum=0;
    var arr = numb.split('');
    for(var i =0;i< arr.length;i++){
        sum+= +arr[i];
    }
    let sumInput = document.getElementById('result3');

    sumInput.innerHTML=sum;
    console.log(sumInput);

}
/*задание 4*/
let arifblur = document.getElementById('num')
arifblur.addEventListener('blur', ArifNum);

function ArifNum(){
    var numb = arifblur.value;
    var sum=0;
    var arr = numb.split(',');
    for(var i =0;i< arr.length;i++){
        sum+= +arr[i];
    }
    console.log(sum);   
    var arif = sum / arr.length;
    let sumInput = document.getElementById('result4');

    sumInput.innerHTML=arif;
    console.log(sumInput);

}

/*Задание 5 */

let fio = document.getElementById('fio');
fio.addEventListener('blur',fioFunc);
function fioFunc(){
    let imyaInput=document.getElementById('imya');
    let famInput=document.getElementById('fam');
    let otchInput=document.getElementById('otch');
    var fios = fio.value;
    var arr=fios.split(' ');
    imyaInput.innerHTML=arr[0];
    famInput.innerHTML=arr[1];
    otchInput.innerHTML=arr[2];
}

/*Задание 6 */

let fio6 = document.getElementById('task6');
fio6.addEventListener('blur', task6)
function task6(){
    let fio = fio6.value;
    let arr = fio.split(' ');
    for(var i = 0; i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        console.log(arr[i])
    }
    let endstr = arr.join(' ');
    fio6.value=endstr;
}

/*задание 7*/
let task7 = document.getElementById('task7');
task7.addEventListener('blur',task7func);
function task7func(){
    let text = task7.value;
    let arr = text.split(' ');
    console.log(arr);
    let out = document.getElementById('count');
    out.innerHTML = arr.length;
}

/*Задание 8 */
let task8 = document.getElementById('task8');
task8.addEventListener('blur', task8func);
function task8func(){
    let text = task8.value;
    let arr = text.split(' ');
    let arrLen =0;
    for(var i = 0; i< arr.length; i++){
        if (arr[i].length > arrLen){
            arrLen = arr[i].length;
        }
    }
    let out = document.getElementById('count8');
    out.innerHTML = arrLen;
}

/*Задание 9 */
let task9 = document.getElementById('task9');
task9.addEventListener('blur', task9func);
function task9func() {
    let date = task9.value.split('.');
    let newDate = date[2] + '-' + date[1] + '-' + date[0];
    let out = document.getElementById('count9');
    out.innerHTML = newDate;
}

/* Задание 10 */
let task10 = document.getElementById('task10');
task10.addEventListener('blur', task10func)

function task10func(){
    let year = task10.value;
    let newyear = new Date().getFullYear();
    let out = document.getElementById('count10');
    out.innerHTML = newyear-year;
}