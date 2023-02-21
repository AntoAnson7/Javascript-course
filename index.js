let count=document.getElementById("count");
console.log(count);
let ctr=0;

function increment(){
    ctr++;
    count.innerText=ctr;
}
function decrement(){
    ctr--;
    count.innerText=ctr;
}
let name="Anto";
let greet=document.getElementById("wc");
greet.innerText="Welcome back, "+name;

let save1=document.getElementById("save");

function save(){
    if (ctr<=0)
    {
        document.getElementById("error").innerText="Invalid count";
    }
    else{
        document.getElementById("error").innerText="";
        save1.textContent+= ctr+"-";
        ctr=0;
        count.innerText=ctr;
    }  
}