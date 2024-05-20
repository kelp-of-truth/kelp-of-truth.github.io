const searchParams = new URLSearchParams(window.location.search)
for (const [key, val] of searchParams) {
    if(key==="name"){
        fetch(`https://kelpoftruth.com/video-viewer/src/${val}`)
        .then((res)=>{
            if(res.status===404){
                document.body.classList.add("notfound");
                document.body.innerHTML=`ファイル <u><b>"${val}"</b></u> は見つかりませんでした<br><br><a href="https://kelpoftruth.com">トップページに戻る</a>`;
            }else{
                document.querySelector(".player").hidden=false;
                document.querySelector("#title").innerHTML=`${val}<button title="Download" id="download"><svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#000000"><path d="M480-315.33 284.67-510.67l47.33-48L446.67-444v-356h66.66v356L628-558.67l47.33 48L480-315.33ZM160-160v-202h66.67v135.33h506.66V-362H800v202H160Z"/></svg></button>`;
                document.querySelector("#player").src=`./src/${val}`;
                document.querySelector("#download").onclick=()=>{
                    window.location.href=`./src/${val}`;
                }
            }
        })
    }
}