let btn = document.getElementById("btn"); 
let names = document.getElementById("myName");
// console.log(names);
// console.log(btn);
btn.addEventListener('click',(e) => {
e.preventDefault();
alert(`thank you for your time, ${names.value}`)
})


let x = document.getElementById("mam");
let y = document.getElementById("Zm");
console.log(y);
console.log(x);
x.addEventListener('click', function(){
    y.innerHTML="welcomeToMyPortfolio ";

// y.innerText="welcomeToMyPortfolio ";
})   
// function add( a , b ){ let add = a + b }