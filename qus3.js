// print all countries names ,region,subregion and populations.

let XMLHttpRequest=require('xhr2');

let xhr=new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.onload=function(){
    let user=(JSON.parse(xhr.responseText));
    let names=[];
    let region=[];
    let subregion=[];
    let population=[];
    for (let users of user){
        names.push(users['name']);
        region.push(users['region']);
        subregion.push(users['subregion']);
        population.push(users['population']);
    }
    
    console.log("Names :",names);
    console.log(" ");
    console.log("Region :",region);
    console.log(' ');
    console.log("Subregion :",subregion);
    console.log(' ');
    console.log("population :",population);

}
xhr.send();