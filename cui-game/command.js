let holdingcmd="";
let holdingvar=[];

function runcmd(s){
    console.log(s);



    addtxt(`&gt;&nbsp${s}`);
    linetxt="";
    slct_line=0;
    document.querySelector(".cmd-line").remove();


    if(holdingcmd!==""){
        switch(holdingcmd){
            case "profile":
                if(s==="1"||s==="2"||s==="3"){
                    if(user_profile[Number(s)-1].no_data){
                        addtxt(`プロファイルを新規作成します`);
                        holdingcmd="prmpt_createprofile_username";
                        holdingvar[0]=Number(s)-1;
                        addtxt(`プレイヤー名を入力してください`);
                    }else if(!user_profile[Number(s)-1].no_data){
                        addtxt(`プロファイル${s}を開いています...`);
                        // blcInput=true;
                        holdingcmd="";
                        // setInterval(() => {
                        //     blcInput=false;
                        // }, 1000);
                        
                    }
                }else{
                    addtxt(`プロファイル${s}は選択できません`);
                }
                break;
            case "prmpt_createprofile_username":
                if(String(s).length<=20){
                    addtxt(`<div>プレイヤー名を${s}で決定しますか？(※後から変えることはできません)<br><ul><li>y:&nbsp;Yes</li><li>n:&nbsp;No</li></ul></div>`);
                    holdingcmd="cmfrm_createprofile_username";
                    holdingvar[1]=s;
                }else{
                    addtxt("<div>ンアーッ!プレイヤー名が長すぎます<br>20文字以内にしてください</div>")
                }
                break;
            case "cmfrm_createprofile_username":
                if(s==="y"){
                    addtxt(`プロファイル${String(holdingvar[0]+1)}のプレイヤー名を&nbsp;'${holdingvar[1]}'&nbsp;で決定しました`);
                    user_profile[holdingvar[0]].no_data=false;
                    user_profile[holdingvar[0]].name=holdingvar[1];
                    holdingcmd="";
                    holdingvar=[];
                }else if(s==="n"){
                    addtxt("<div>キャンセルしました<br>プレイヤー名を入力してください</div>");
                    holdingcmd="prmpt_createprofile_username";
                }else{
                    addtxt(`'y'(Yes)か'n'(No)を入力してください`);
                }
        }
    }else{

        let cmd=String(s).split(" ");
        switch(cmd[0]){
            case "settings":
                if(cmd.length===1){
                    addtxt("<div>settings</div><ul><li>sound&nbsp;音量(0~100%)</ul>")
                }else{
                    if(cmd[1]==="sound"){
                        if(cmd[2]===undefined||cmd[2]<0||cmd[2]>100){
                            addtxt("コマンドが間違っています");
                        }else{
                            keydown1.volume=cmd[2]/100;
                            keydown2.volume=cmd[2]/100;
                        }
                    }
                }
                break;
            case "profile":
                var profile_txt=[];
                for(let i=0;i<3;++i){
                    if(user_profile[i].no_data){
                        profile_txt[i]=`<li>プロファイル${i+1}(${i+1}):&nbsp;新しく作る</li>`;
                    }else if(!user_profile[i].no_data){
                        profile_txt[i]=`<li>プロファイル${i+1}(${i+1}):&nbsp;${user_profile[i].name}&nbsp;/&nbsp;プレイ時間:&nbsp;${fixTime(user_profile[i].play_record)}</li>`;
                    }
                }
                addtxt(`<div>プロファイル:&nbsp;カッコ内の数字を入力してください</div><ul>${profile_txt[0]}${profile_txt[1]}${profile_txt[2]}</ul>`);
                holdingcmd="profile";
                break;
            default:
                addtxt(`コマンド&nbsp;'${cmd[0]}'&nbsp;は実行できません`);
                break;
        }
    }




    addprmpt();
    window.scrollTo(0,document.querySelector("#console").clientHeight);
}