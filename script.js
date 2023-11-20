//  1. How to compare two JSON objects

let obj1 = {name:"Person 1", age:5};
let obj2 = {age:5, name:"Person 1"};
console.log(JSON.stringify(obj1) ===JSON.stringify(obj2));

// output

// false

// 2. Print the rest countries name and flags

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    
for(var obj of result){
    console.log(obj.name.common, obj.flags.png)
}

}


// //print the result of name common and region
    var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    
for(var obj of result){
    console.log(obj.name.common, obj.region, obj.subregion, obj.population)
}

}

