let gameseq = [];
let userseq = [];
let level = 0;
let started = false;
let btns = ["red", "yellow", "green", "purple"];
let h2=document.querySelector("h2");
document.addEventListener("keydown", function () {
    if(started==false){
    console.log("Game started");
    started = true;
    levelup();
    }
});
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}
function levelup() {
    userseq = [];
    level++;
    h2.innerText=`Level ${level}`;
    let randidx= Math.floor(Math.random() * 3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}
function checkans(idx){
   // coonsole.log("curr level: "+level);
  
   if(userseq[idx]===gameseq[idx]){
    if(userseq.length===gameseq.length){
        setTimeout(levelup,1000); 
     }
    
   }else{
    h2.innerHTML=`Game Over, Your score was <b>${level}</b>!! Press any key to restart`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    }, 150);
    reset();
 }
}
 function btnpress(){
    let btn = this;
    btnflash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkans(userseq.length-1);
}
 let allbtns=document.querySelectorAll(".btn");
for(btn  of allbtns)
{
    btn.addEventListener("click", btnpress);
}
function reset(){
    gameseq=[];
    userseq=[];
    level=0;
    started=false;
}
