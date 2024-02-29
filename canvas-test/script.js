const canvas=document.querySelector("canvas");
var vel=5;
var x=0;
var y=0;
var rising=false;
var onGround=false;
var drpingTime=0;
var prsing=[];
var usedDJ=false;
var swoop=false;
var checkdown=0;
// 0: Left 1: Right
var angle=1;
document.addEventListener("keydown",(e)=>{
    if(prsing[e.keyCode]===null){return true}
    prsing[e.keyCode]=true;
})
document.addEventListener("keyup",(e)=>{
    prsing[e.keyCode]=false;
})

// FPS: 60
setInterval(() => {
    eventListener();
    draw();
    gravity();
    if(rising){
        jump(9);
    }
}, 16);

// User Action
function eventListener(){
    // Double S
    checkdown++;
    if(checkdown<10){
        if(prsing[83]){
            swoop=true;
        }
    }
    // A
    if(prsing[65]){
        x-=vel;
        angle=0;
    }
    // D
    if(prsing[68]){
        x+=vel;
        angle=1;
    }
    // S
    if(!onGround){
        if(prsing[83]&&!swoop){
            checkdown=0;
            prsing[83]=null;
        }
        if(!prsing[83]&&swoop){
            swoop=false;
        }
    }
    // Space
    if(prsing[32]){
        prsing[32]=null;
        if(!onGround&&!usedDJ){
            drpingTime=0;
            usedDJ=true;
        }else{
            rising=true;
        }
    }
}

// Draw
function draw(){
    const ctx=canvas.getContext("2d");
    ctx.fillStyle="black";
    ctx.clearRect(0,0,640,480);
    ctx.fillRect(0,350,640,130);
    // ctx.fillStyle="green";
    ctx.fillRect(0,300,640,50);
    // ctx.fillStyle="black";
    if(swoop){
        ctx.fillStyle="blue";
    }else{
        ctx.fillStyle="black";
    }
    ctx.fillRect(x,y,30,60);
}

// Gravity
function gravity(){
    if(y<240){
        onGround=false;
        vel=3;
    }else{
        onGround=true;
        vel=5;
    }
    if(!onGround){
        var fall=(drpingTime^2)*0.5;
        if(swoop){
            fall=fall+10;
        }
        for(let i=0;i<fall*2;++i){
            if(!onGround){
                y+=0.4;
            }
            if(y<240){
                onGround=false;
            }else{
                onGround=true;
                drpingTime=0;
                rising=false;
                usedDJ=false;
                if(swoop){
                    swoop=false;
                }
                break;
            }
        }
        drpingTime++;
    }
}

// Jump
function jump(h){
    y-=h;
}