const searchParams = new URLSearchParams(window.location.search)
for (const [key, val] of searchParams) {
    if(key==="name"){
        document.querySelector("#title").innerHTML=val;
        document.querySelector("#player").src=`./src/${val}`;
    }
}