let save=document.getElementById("save");
let save_tab=document.getElementById("save-tab");
let delete_all=document.getElementById("delete");
let leads=document.getElementById("list");
const input=document.getElementById("input");

let text=[];

let render=()=>{
    let listItems="";
    for(let i=0;i<text.length;i++){
        // listItems+="<li><a href='"+text[i]+"'target='_blank'>"+text[i]+"</a></li>"
        listItems+=`
        <li>
            <a href='${text[i]}' target='_blank'>
                ${text[i]}
            </a>
                </li>
            `
    }
    leads.innerHTML=listItems;    
}

let check=()=>{
    if(lsback!=null)
    render();
}

save.addEventListener("click",function(){
    if(input.value.length!=0){
    text.push(input.value);
    input.value="";
    localStorage.setItem("text",JSON.stringify(text));
    }
    check();
    // console.log(localStorage.getItem("text")+"LSback/");
})

let lsback=JSON.parse(localStorage.getItem("text"));

// save_tab.addEventListener("click",function(){
//     chrome.tabs.query({active:true,currentWindow:true},function(tabs){
//         let at=tabs[0];
//         text.push(at.url);
//         input.value="";
//         localStorage.setItem("text",JSON.stringify(text));
//         check();
//     });
// })

delete_all.addEventListener("dblclick",function(){
    text=[];
    localStorage.clear();
    render();

})

