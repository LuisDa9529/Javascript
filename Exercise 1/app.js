var valor = prompt("Cuanto $$ tienes en el banco?");
const rand =Math.floor(Math.random() * (500000 - 1 ) + 1);

if(valor >= 1000000){
    console.log(`I'm rich! I have $${valor}`);
}else if(valor < 1000000 && valor >= rand){
    console.log(`I'm not rich, BUT I have $${valor}`);
}else if(valor<rand){
    console.log(`I'm poor, I only have $${valor}`);
}

//console.log(valor + " " + rand);
console.log(`The "poor" threshold is $${rand}`);