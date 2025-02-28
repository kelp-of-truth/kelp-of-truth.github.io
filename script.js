const theme_dark=
`:root{
    --b-0: #ffffff;
    --b-1: #cccccc;
    --b-2: #999999;
    --b-3: #666666;
    --b-4: #333333;
    --b-5: #000000;
    --font: #ffffff;
    --back: #333333;
    --f-back: #000000;
    --theme-change: #660099;
}`
const theme_light=
`:root{
    --b-0: #000000;
    --b-1: #333333;
    --b-2: #666666;
    --b-3: #999999;
    --b-4: #cccccc;
    --b-5: #ffffff;
    --font: #333333;
    --back: #ffffff;
    --f-back: #cccccc;
    --theme-change: #ffff99;
}`
window.addEventListener("load",()=>{
var is_dm=localStorage.getItem("theme");
if(is_dm===null){
    is_dm=window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.querySelector("#theme-change").checked=is_dm;
    if(is_dm){
        document.querySelector("#css-theme").innerHTML=theme_dark;
        localStorage.setItem("theme","1");
    }else{
        document.querySelector("#css-theme").innerHTML=theme_light;
        localStorage.setItem("theme","0");
    }
}else{
    is_dm=Number(is_dm);
    document.querySelector("#theme-change").checked=is_dm;
    if(is_dm){
        document.querySelector("#css-theme").innerHTML=theme_dark;
    }else{
        document.querySelector("#css-theme").innerHTML=theme_light;
    }
}
document.body.hidden=false;
document.querySelector("main").style.paddingTop=`${document.querySelector("header").clientHeight}px`;
document.querySelector("html").style.scrollPadding=`${document.querySelector("header").clientHeight}px`;
})
document.querySelector("#theme-change").addEventListener("change",(e)=>{
if(e.target.checked){
    document.querySelector("#css-theme").innerHTML=theme_dark;
    localStorage.setItem("theme","1");
    
}else{
    document.querySelector("#css-theme").innerHTML=theme_light;
    localStorage.setItem("theme","0");
}
})
document.querySelector("#menu-btn").addEventListener("click",()=>{
    document.querySelector("#menu-btn").classList.toggle("open")
})