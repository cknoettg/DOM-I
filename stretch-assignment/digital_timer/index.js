let secTens = document.getElementById('secondTens');
let secOnes = document.getElementById('secondOnes');
let colons = document.getElementById('colon');
let msHuns = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

//example - perform function every 3 secs, 1000ms = 1 sec
//setInterval(function(){ alert("Hello"); }, 3000);

//counts up to 10 seconds
const maxTime = 10;
const maxCount = 9;

//initial test
//msTens.style.color = "green";

//count up the msTens
msTens.textContent=0;
setInterval(function(){
    for (let i=0;i<=maxCount;i++){
        msTens.textContent = i.toString();
        // if (i===maxCount){
        //     i=0;
        // }
        //infinite loop
    } 
    //reset count here?
    //i=0;
}, 10);

//count up the msHundreds


//do something every 10ms
//setInterval(function(){  }, 10);

// increments every 10ms
//setInterval(function(){  }, 10);

//Has digits change to red when it gets to 10 seconds

//Should not count past 10 seconds