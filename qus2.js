// Display all country flogs in console.
let XMLHttpRequest = require('xhr2')

let xhr=new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.onload=function() {
    let data=(JSON.parse( xhr.responseText));
    let flags=[];
    for (let datas of data){
        flags.push(datas['flags']);
    }
    console.log(flags);
 
}
xhr.send();