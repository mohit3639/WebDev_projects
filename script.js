const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date();                   // new Date is an direct object 
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
} , 1000)