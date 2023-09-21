const start=document.querySelector('#start');
const stop=document.querySelector('#stop');
let audio=document.querySelector('#beepz');
let hrs=0
let mins=0
let secs=0
let status="off"
let timerInt=null
hrs=document.querySelector('#hrs');
mins=document.querySelector('#mins');
secs=document.querySelector('#secs');

function timer(){
  if (hrs.value>0 && secs.value==0 && mins.value==0){
    hrs.value--;
    mins.value=59;
    secs.value=60;
  }
  if (mins.value>0 && secs.value==0){
    mins.value--;
    secs.value=60;
  }
  if (secs.value>0){
    secs.value--;
  }
  if(secs.value==0 && mins.value==0 && hrs.value==0){
    alert("Timer is over!")
    status="off"
    window.clearInterval(timerInt)
    start.innerHTML='<i class="fa-solid fa-play"></i>';
    document.getElementById('#beepz').play()
  }
}

start.addEventListener('click', function(){
  if(status=="off"){
    timerInt= window.setInterval(timer,1000)
    start.innerHTML='<i class="fa-solid fa-pause"></i>';
    status="on"}
  else{
    window.clearInterval(timerInt)
    start.innerHTML='<i class="fa-solid fa-play"></i>';
    status="off"
  }
  });
stop.addEventListener('click', function(){
    if(1){
      window.clearInterval(timerInt)
      secs.value=0
      mins.value=0
      hrs.value=0
      status="off"
      start.innerHTML='<i class="fa-solid fa-play"></i>';}
    });
  
//   var x = document.getElementById("#beepz"); 

// function playAudio() { 
//   x.play(); 
// } 
// window.addEventListener('load', playAudio())


