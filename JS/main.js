/* localstorage - shaxsiy malumotlar ombori */

/*localStorage.setItem('ism','Navruz');*/
/*
localStorage.setItem('familiya','Malikov');
*/
/*localStorage.setItem('yoshi','17 yoshda');*/

/*localStorage['ism'] = 'Islom';*/
/*localStorage['familiya'] = 'Muhammadaliyev';*/
/*localStorage['yoshi'] = '18 yoshda';*/

/*localStorage.removeItem('ism');*/
/*localStorage.removeItem('familiya');*/
/*localStorage.removeItem('yoshi');*/
/*localStorage.clear();*/

/*let uningIsmi = localStorage.getItem('ism');*/
/*let uningFamiliyasi = localStorage.getItem('familiya');*/
/*let uningYoshi = localStorage.getItem('yoshi');*/

/*console.log(uningIsmi,uningFamiliyasi);*/

/* https request in JS (JS da https so`rovlar) */

/*let sorov = new XMLHttpRequest();*/

/*sorov.open('get','https://getty.uz/serverdan/malumot/olish');*/
/*sorov.send();*/

/*
sorov.onload = function (){
    console.log(sorov.responseText);
}*/

/* JSON in JS ( JS da ma'lumotlarni JSON lash ) */

/*let jsFile = {ism:"Navruz",yoshi:18}; */      /* JavaScript */
/*let jsonFile = '{"ismi":"Navruz","yoshi":18}';*/  /* JSON */
/*console.log(JSON.stringify(jsFile));*/    /* JS ni JSONGA o`girish */

/*console.log(JSON.parse(jsonFile));          /!* JSON ni JS ga o`girish *!/*/


/*
let sorov = new XMLHttpRequest();
sorov.open('get','jsonFayl.json');
sorov.send();
sorov.onload = function (){
let byData = JSON.parse(sorov.responseText)
    console.log(byData.ism,byData.yoshi);
}
*/


let sorovv = new XMLHttpRequest();
sorovv.open('get','jsFayl.js');
sorovv.send();
console.log(JSON.stringify(sorovv.responseText));