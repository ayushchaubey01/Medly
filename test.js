const title=document.querySelector(".title");

const button=document.querySelector("#button");

let btn_status=false;
button.addEventListener("click",() => { 
    btn_status=true; 
if(btn_status==true)
{
title.textContent="Welcome to Medly";
title.style.color="#10B981";
}});

