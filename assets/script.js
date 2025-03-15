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
    --back-1: #666666;
    --f-back: #000000;
    --theme-change: #660099;
}
pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}
.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}`
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
    --back-1: #cccccc;
    --f-back: #cccccc;
    --theme-change: #ffff99;
}
pre code.hljs{display:block;overflow-x:auto;padding:1em}
.hljs{padding:3px 5px}.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#005cc5}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-code,.hljs-comment,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}`

const track=document.querySelector("#scrollbar #scrolltrack");

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
    document.querySelector(".h-mobile").style.top=`${document.querySelector("header").clientHeight}px`;
    // document.querySelector(".h-mobile").style.height=`calc(100svh - ${document.querySelector("header").clientHeight}px)`;
    document.querySelector("main").style.paddingTop=`${document.querySelector("header").clientHeight}px`;
    document.querySelector("html").style.scrollPadding=`${document.querySelector("header").clientHeight}px`;

    track.style.height=`${window.innerHeight**2/document.body.clientHeight-10}px`;
    scrollbar();
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
        document.querySelector("#menu-btn").classList.toggle("open");
        document.querySelector(".h-mobile").classList.toggle("open");
})
let scrollbar_hidden;
document.addEventListener("scroll",()=>{
    track.style.opacity="0.75";
    clearTimeout(scrollbar_hidden)
    scrollbar_hidden=setTimeout(() => {
        track.style.opacity="0";
    }, 1000);
    scrollbar();
})
window.addEventListener("resize",()=>{
    track.style.height=`${window.innerHeight**2/document.body.clientHeight-10}px`;
    scrollbar();
})
function scrollbar(){
    track.style.top=`${window.scrollY*(window.innerHeight/document.body.clientHeight)}px`;
}
