function displayTime(){
    let dateTime = new Date();

    let hrs = dateTime.getHours();
    let mins = dateTime.getMinutes();
    let secs = dateTime.getSeconds();
    let ses = "PM"

    if(hrs > 12){
        document.getElementById('session').innerHTML = ses;
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;



}
setInterval(displayTime, 1000);