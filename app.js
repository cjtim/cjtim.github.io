var Timer = document.getElementById("Timer")
var interval, hr, min, sec

function setTimeStartCount(sec){
    cancel()
    document.getElementById("secvalue").value = sec;
    startCount()
}
function cancel() {
    clearInterval(interval)
    Timer.innerHTML = `Canceled`;
    setTimeout(() => Timer.innerHTML = `0hr : 0m : 0s`, 2000)
}
function ifEnter() {
    if(event.keyCode == 13) {
        startCount()
    }
}
function startCount(){
    cancel()
    stopCount = 0;
    hr = document.getElementById("hrvalue").value;
    min = document.getElementById("minutevalue").value;
    sec = document.getElementById("secvalue").value;
    document.getElementById("hrvalue").value = "";
    document.getElementById("minutevalue").value = "";
    document.getElementById("secvalue").value = "";
    time = (hr*3600 + min*60 + Number(sec))*1000; //JavaScript see 'sec' as String WTF BRO!!
    Counter(time)
}
function Counter(time) {
    Timer.innerHTML = `${hr}hr : ${min}m : ${sec}s`;
    time -= 1000;

    interval = setInterval(() => {
        if ( time >= 0 ){
            let hr1 =  Math.floor(time/3600000)
            let min1 = Math.floor((time/60000)%60)
            let sec1 = Math.floor((time/1000 % 60))
            Timer.innerHTML = `${hr1}hr : ${min1}m : ${sec1}s`
            time -= 1000
            
        }
    }, 1000)
    setTimeout(() => alert('Time up!'), time)
    setTimeout(() => Timer.innerHTML = `Time up!`, time+100)
    setTimeout(() => clearInterval(interval), time+100 )
    
    return 0;
}
