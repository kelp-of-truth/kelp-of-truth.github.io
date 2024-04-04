const keydown1=new Audio("./sounds/keydown1.mp3");
const keydown2=new Audio("./sounds/keydown2.mp3");
const cnsl=document.querySelector("#inputs");
const txtcrsr=document.querySelector("#txt-cursor");
let keycmds=[
    "38 38 40 40 37 39 37 39 65 66"
]
window.addEventListener("load",()=>{

    document.body.hidden=false;
    // addtxt("<h1 style='text-align:center;'><img src='./logo.png'></h1>");
    // t: TOP b: BOTTOM l: LEFT r:RIGHT
    var userAgent = window.navigator.userAgent.toLowerCase();
    // if(userAgent.indexOf("msie") != -1 ||
    //         userAgent.indexOf("trident") != -1) {
    //     console.log("過去にすがるな");
    // } else if(userAgent.indexOf("edge") != -1) {
    //     console.log("Microsoftのまわしもんか？");
    // } else if(userAgent.indexOf("chrome") != -1) {
    //     console.log("模範解答");
    // } else if(userAgent.indexOf("safari") != -1) {
    //     console.log("web-kitってgmだよね");
    // } else if(userAgent.indexOf("firefox") != -1) {
    //     console.log("FireFoxではデバッグしてないよ♥");
    // } else if(userAgent.indexOf("opera") != -1) {
    //     console.log("絶滅危惧種だよ君");
    // }

    // if (navigator.userAgent.match(/iPhone|Android.+Mobile/)){
        document.body.addEventListener("click",(e)=>{
            document.querySelector("#mbil-input").focus();
        })
        document.querySelector("#mbil-input").addEventListener("input",()=>{
            if(RegExp(/^[\x20-\x7e]*$/).test(document.querySelector("#mbil-input").value)){
                input(document.querySelector("#mbil-input").value);
            }
            document.querySelector("#mbil-input").value="";
        })
        document.querySelector("#mbil-input").addEventListener("change",()=>{
            keydown2.currentTime=0;
            keydown2.play();
            runcmd(linetxt.replace(/</g,"&lt;").replace(/>/g,"&gt;"));
        })
    // }

    addprmpt();
    setInterval(() => {
        txtcrsr.style.top=`${window.pageYOffset+document.querySelector(".cmd-line").getBoundingClientRect().top+20}px`;
        txtcrsr.style.left=`${30+10*slct_line}px`;
        // txtcrsr.style.top=`${window.pageYOffset+document.querySelector(".cmd-line").getBoundingClientRect().top+80}px`;
        // txtcrsr.style.left=`${60+40*slct_line}px`;
        if (navigator.userAgent.match(/iPhone|Android.+Mobile/)){document.querySelector("#mbil-input").style.top=`${window.pageYOffset+document.querySelector(".cmd-line").getBoundingClientRect().top+20}px`;}
    }, 1);
})
function addtxt(s){
    cnsl.innerHTML+=`<div class="plane-txt">${s}</div><br>`;
}
function addprmpt(){
    cnsl.innerHTML+=`<div class="cmd-line"></div>`;
}


// ===============================

let user_profile=[
    {
        no_data:false,
        name:"KelpOfTruth",
        play_record:10
    },
    {
        no_data:true,
        name:"",
        play_record:0
    },
    {
        no_data:true,
        name:"",
        play_record:0
    }
];

// ===============================



function input(key){
    if(key==="backspace"){
        if(linetxt!==""&&slct_line!==0){
            linetxt=linetxt.slice(0,(slct_line-1))+linetxt.slice(slct_line);
            slct_line-=1;
            document.querySelector(".cmd-line").innerHTML=`${linetxt.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;")}`;
        }
    }else{
        linetxt=linetxt.slice(0,slct_line)+key+linetxt.slice(slct_line);
        slct_line++;
        document.querySelector(".cmd-line").innerHTML=`${linetxt.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;")}`;
    }
}

function fixTime(n){
    var hour=(n-n%60)/60;
    var minute=n%60;
    var result=`${hour}時間${minute}分`;
    return result;
}

function paste(s){
    console.log(s)
    for(let idx of String(s)){
        if(RegExp(/^[\x20-\x7e]*$/).test(idx)){
            input(idx);
        }
    }
}