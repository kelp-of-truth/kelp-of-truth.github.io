window.addEventListener("load",()=>{
    const main=document.querySelector(".main");
    const header=document.querySelector(".header");
    header.classList.add("visible")
    main.hidden=false;
    document.querySelector(".footer").style.display="inline-block";
    setTimeout(() => {
        main.classList.add("visible");
    }, 1);
})
// window.addEventListener("scroll",()=>{
//     if(window.scrollY+document.querySelector(".apple-music iframe").clientHeight>document.querySelector(".apple-music").getBoundingClientRect().y){
//         setTimeout(() => {
//             document.querySelector(".apple-music iframe").classList.add("visible");
//         }, 1);
//     }
// })
// let copied_timer=0;
function contentCopied(n){
    if(n>0){
        setTimeout(() => {
            document.querySelector(".content_copy img").src="./img/content_copied.png";
            document.querySelector(".content_copy img").alt="content_copied";
            n-=1;
            contentCopied(n);
        }, 1);
    }else{
        document.querySelector(".content_copy img").src="./img/content_copy.png";
        document.querySelector(".content_copy img").alt="content_copy";
        return true;
    }
}
function ad(n){
    if(n===0){
        alert(":thinking:")
    }
}
setInterval(() => {
    if(document.getElementById("aswift_7").clientHeight===0){
        for(let idx of document.querySelectorAll(".ad")){
            idx.remove();
        }
    }
}, 10);