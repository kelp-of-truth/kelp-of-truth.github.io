const keydown1=new Audio("./sounds/keydown1.mp3");
const keydown2=new Audio("./sounds/keydown2.mp3");
const cnsl=document.querySelector("#inputs");
const txtcrsr=document.querySelector("#txt-cursor");

window.addEventListener("load",()=>{
    document.body.hidden=false;
    addtxt("コマンドを入力してください...");
    addprmpt();
    setInterval(() => {
        txtcrsr.style.top=`${window.pageYOffset+document.querySelector(".cmd-line").getBoundingClientRect().top+20}px`;
        txtcrsr.style.left=`${30+10*slct_line}px`;
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