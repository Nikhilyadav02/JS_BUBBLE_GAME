// var clutter = "";

// for(var i = 1;i<=290;i++){
//     var no = Math.floor(Math.random()*10);
//     clutter += `<div class="bubble">${no}</div>`;
// }

// document.querySelector("#panelbottom").innerHTML = clutter;      //till here this code is use for to create bubble and show in the pannel

var time = 60;
var score = 0;
var hitrn = 0;

function getHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}


function getScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function bubble_maker(){
    
    var clutter = "";
    for(var i = 1;i<=290;i++){
        var no = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${no}</div>`;
    }
    document.querySelector("#panelbottom").innerHTML = clutter; 
}


function timer(){
    var timerinterval = setInterval(function(){
        if(time>0){
        time--;
        document.querySelector("#Time").textContent = time;
        }
        else{
            clearInterval(timerinterval);
            document.querySelector("#panelbottom").innerHTML = `<h1> Game Over Your Score is ${score} </h1>`;
        }
    },1000);
}

document.querySelector("#panelbottom").addEventListener("click",function(details){
    var clickedno = Number(details.target.textContent);
    // console.log(clickedno);
    if(clickedno == hitrn){
        getScore();
        bubble_maker();
        getHit();
    }

});


bubble_maker();
getHit();
timer();
