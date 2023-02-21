

let res=0,ctr=0;
let card3=0;

let getRandomCard =()=>{
    let val= Math.floor(Math.random()*13)+1;   
    if(val>10)
    return 10;
    else
    return val;
}
let card1=getRandomCard();
let card2=getRandomCard();

let cd=document.getElementById("cd");
let sum=document.getElementById("sum");
let bjstat=document.getElementById("bjstat");
let status=false;
let alive=true;
res=card1+card2;


function start(){
    if(ctr==0)
    {
    cd.textContent+=" "+card1+" "+card2;
    sum.textContent+=" "+res;
    ctr++;}

    if(res<21){
        bjstat.textContent="Oof! Do you want to draw a new Card?";
    }
    else if(res==21){
        bjstat.textContent="Hooray! Youve won Blackjack!";
        status=true;
        alive=false
    }
    else{
        bjstat.textContent="Youre out of the game!";
        alive=false;
    }
}

function newcard(){
    if(status!=true){
    card3=getRandomCard();
    res+=card3;
    cd.textContent+=" "+card3;
    sum.textContent="Sum: "+res;
    start();}
}