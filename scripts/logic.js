

function update_time() {
    const time = new Date();

    const [pm, hr] = get_hours(time.getHours());
    const min = get_min(time.getMinutes());

    hours.textContent = hr;
    mkhi.classList.toggle("vis-hid");
    minutes.textContent = min;
    meridiem.textContent = pm ? "PM" : "AM";
}


function get_hours(hrs){
    const hr = hrs >= 12;

    if(hrs != 12){
        hrs %= 12;
    }

    return [hr, get_min(hrs)];
}

function get_min(min){
    if(min < 10){
        min = `0${min}`
    }

    return min;
}

function update_greeting_msg(){
    const hour = new Date().getHours();

    if(hour <= 6){
        greeting_msg.textContent = "Hello there👋🏻";
    }else if(hour < 12){
        greeting_msg.textContent = "Good morning.❤️";
    }else if(hour < 14){
        greeting_msg.textContent = "Good afternoon.❤️";
    }else if(hour < 19){
        greeting_msg.textContent = "Good evening.❤️";
    }else{
        greeting_msg.textContent = "Good night.❤️";
    }

}