const shelf=document.getElementById("shelf");
const jackets=document.getElementsByClassName("jacket");

let select=1;
let interval=false;
let prskey=[];
let touchstr=-10000000;

window.addEventListener("load",()=>{
    change();
})

function change(){
    for(let i=0;i<jackets.length;i++){
        const idx=jackets[i];
        idx.classList.remove("select");
        idx.classList.remove("left0");
        idx.classList.remove("left1");
        idx.classList.remove("right0");
        idx.classList.remove("right1");
        idx.classList.remove("hide")
        switch(i){
            case select:
                idx.classList.add("select");
                break;
            case select-1:
                idx.classList.add("left0");
                break;
            case select-2:
                idx.classList.add("left1");
                break;
            case select+1:
                idx.classList.add("right0");
                break;
            case select+2:
                idx.classList.add("right1");
                break;
            default:
                idx.classList.add("hide");
        }
    }
}
setInterval(() => {
    if(interval>0){interval-=1;return true}
    if(prskey["ArrowLeft"]&&select>0){
        select-=1;
        change();
        interval=20;
    }else if(prskey["ArrowRight"]&&select<jackets.length-1){
        select++;
        change();
        interval=20;
    }
}, 17);
document.addEventListener("keydown",(e)=>{
    prskey[e.key]=true;
})
document.addEventListener("keyup",(e)=>{
    prskey[e.key]=false;
})
document.addEventListener("touchstart",(e)=>{
    touchstr=e.touches[0].clientX;
})
document.addEventListener("touchmove",(e)=>{
    e.preventDefault();
    const dif=touchstr-e.touches[0].clientX;
    if(dif<=-150&&select>0){
        select-=1;
        touchstr=e.touches[0].clientX;
        change();
        interval=20;
    }else if(dif>=150&&select<jackets.length-1){
        select++;
        touchstr=e.touches[0].clientX;
        change();
        interval=20;
    }
})