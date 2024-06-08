let connectedGamepadIndex;
let loopID;
let prskey=[];
document.addEventListener("keydown",(e)=>{prskey[e.keyCode]=true})
document.addEventListener("keyup",(e)=>{prskey[e.keyCode]=false})
addEventListener("gamepadconnected", (e) => {
    console.log("Connected");
    connectedGamepadIndex = e.gamepad.index;
    // loopID = requestAnimationFrame(loop);
});
loopID = requestAnimationFrame(loop);

addEventListener("gamepaddisconnected", (e) => {
    console.log("Disconnected");
    connectedGamepadIndex = null;
    cancelAnimationFrame(loopID);
});
const BUTTON_A_INDEX     = 0;
const BUTTON_B_INDEX     = 1;
const BUTTON_X_INDEX     = 2;
const BUTTON_Y_INDEX     = 3;
const BUTTON_LB_INDEX    = 4;
const BUTTON_RB_INDEX    = 5;
const BUTTON_LT_INDEX    = 6;
const BUTTON_RT_INDEX    = 7;
const BUTTON_BACK_INDEX  = 8;
const BUTTON_START_INDEX = 9;
const BUTTON_L3_INDEX    = 10;
const BUTTON_R3_INDEX    = 11;
const BUTTON_UP_INDEX    = 12;
const BUTTON_DOWN_INDEX  = 13;
const BUTTON_LEFT_INDEX  = 14;
const BUTTON_RIGHT_INDEX = 15;
const BUTTON_HOME_INDEX  = 16;
// ===============================
const AXIS_L_HORIZONTAL_INDEX = 0;
const AXIS_L_VERTICAL_INDEX   = 1;
const AXIS_R_HORIZONTAL_INDEX = 2;
const AXIS_R_VERTICAL_INDEX   = 3;


const canvas=document.querySelector("canvas");
const ctx=canvas.getContext("2d");
let delcnt=0;
function loop(){
    // GamePad
    var mx=0;
    var my=0;
    if(navigator.getGamepads()[0]!==null){
        let gamepads = navigator.getGamepads();
        let gp = gamepads[connectedGamepadIndex];
        let leftAxisHorizontal = Math.trunc(gp.axes[AXIS_L_HORIZONTAL_INDEX]*10)/10;
        let leftAxisVertical = Math.trunc(gp.axes[AXIS_L_VERTICAL_INDEX]*10)/10;
        // if(leftAxisHorizontal<-0.1){mx=-2}
        // if(leftAxisHorizontal>0.1){mx=2}
        // if(gp.buttons[BUTTON_X_INDEX].pressed){
        //     omae.x+=leftAxisHorizontal*2;
        //     omae.y+=leftAxisVertical*2;
        // }else{
        //     omae.x+=leftAxisHorizontal*4;
        //     omae.y+=leftAxisVertical*4;
        // }
    }
    //     if(gp.buttons[BUTTON_LEFT_INDEX].pressed){mx=-1000}
    //     if(gp.buttons[BUTTON_UP_INDEX].pressed){my=-1000}
    //     if(gp.buttons[BUTTON_RIGHT_INDEX].pressed){mx=1000}
    //     if(gp.buttons[BUTTON_DOWN_INDEX].pressed){my=1000}
    // }
    // // KeyBoard
    // if(prskey[37]){mx=-500}
    // if(prskey[38]){my=-500}
    // if(prskey[39]){mx=500}
    // if(prskey[40]){my=500}
    // // console.log(mx/Math.sqrt(mx^2+my^2))
    // // console.log(mx,my)
    // if(mx!==0||my!==0){
    //     let hyp=Math.hypot(mx,my);
    //     mx=mx/hyp*3000;
    //     my=my/hyp*3000;
    //     if(!prskey[16]){
    //         mx=mx*2;
    //         my=my*2;
    //     }
    //     if(omae.x+mx<0){omae.x=0}else
    //     if(omae.x+mx>525000){omae.x=525000}else{omae.x+=mx;}
    //     if(omae.y+my<0){omae.y=0}else
    //     if(omae.y+my>705000){omae.y=705000}else{omae.y+=my}
    // }

    if(prskey[37]&&prskey[38]){mx=-3000*cos[45];my=-3000*sin[45]}else
    if(prskey[38]&&prskey[39]){mx=3000*cos[45];my=-3000*sin[45]}else
    if(prskey[39]&&prskey[40]){mx=3000*cos[45];my=3000*sin[45]}else
    if(prskey[40]&&prskey[37]){mx=-3000*cos[45];my=3000*sin[45]}else
    if(prskey[37]){mx=-3000}
    if(prskey[38]){my=-3000}
    if(prskey[39]){mx=3000}
    if(prskey[40]){my=3000}
    if(mx!==0||my!==0){
        if(!prskey[16]){
            mx=mx*2;
            my=my*2;
        }
        if(omae.x+mx<0){omae.x=0}else
        if(omae.x+mx>525000){omae.x=525000}else{omae.x+=mx}
        if(omae.y+my<0){omae.y=0}else
        if(omae.y+my>705000){omae.y=705000}else{omae.y+=my}
    }

    wp.src="./wp.png";
    ctx.clearRect(0,0,540,720);

    for(let i=0;i<bullets.length;i++){
        var idx=bullets[i];
        bltImg.src=`./bullet/${idx.name}.png`;
        ctx.drawImage(bltImg,idx.x/1000,idx.y/1000);
        idx.move();
        // if(idx.x<-20||idx.x>580||idx.y<-20||idx.y>700){
        //     bullets.splice(i,1);
        // }
        idx.age++;
    }
    // document.querySelector("img").src=canvas.toDataURL("image/png");
    setTimeout(() => {
        requestAnimationFrame(loop);
    }, 15);
}
setInterval(() => {
    for(let i=0;i<bullets.length;++i){
        var idx=bullets[i];
        if(idx.x<-100000||idx.x>640000||idx.y<-100000||idx.y>820000){
                bullets.splice(i,1);
        }
    }
    // item.x>=-100000||item.y>=-1000000||item.x<=640000||item.y<=820000
    // let newArr=bullets.filter(item=>item.age<200);
    // console.log(newArr);
    // bullets=newArr
}, 300);


let omae={
    x:282.5*1000,
    y:600*1000
}

class Bullet{
    constructor(name,angle,x,y,v,vx,vy,age){
        this.name=name;
        this.angle=angle;
        this.x=x*1000;
        this.y=y*1000;
        this.v=v*1000;
        this.vx=cos[this.angle];
        this.vy=sin[this.angle];
        this.age=0;
    }
    move(){
        this.x+=this.vx*this.v;
        this.y-=this.vy*this.v;
    }
}
function toRad(n){
    return n/180*Math.PI;
}


let deg=0;
let bullets=[];
let sin=[];
let cos=[];
for(let i=0;i<361;i++){
    sin[i]=Math.sin(toRad(i));
    cos[i]=Math.cos(toRad(i));
}
setInterval(() => {
    // let randomx=Math.floor(Math.random()*500);
    // let randomy=Math.floor(Math.random()*200);
    // for(let i=0;i<36;++i){
    //     bullets.push(new Bullet("test",i*-10,randomx+Math.cos(toRad(i*10))*50,randomy+Math.sin(toRad(i*10))*50,0,"bullet-blue"));
    // }
    bullets.push(new Bullet("bullet-blue",Math.floor(Math.random()*3)+210,530,Math.floor(Math.random()*820)-100,Math.floor(Math.random()*5)+8))
}, 60);
setInterval(() => {
    let randomV=Math.floor(Math.random()*2)+15;
    let randomX=Math.floor(Math.random()*120);
    for(let i=0;i<12;i++){
        bullets.push(new Bullet("bullet-red",30*(i+1)+15,210+randomX,50,randomV))
    }
}, 50);
// bullets[0]=new Bullet("bullet-red",0,300,500,0);
const wp=new Image(20,20);
const bltImg=new Image();