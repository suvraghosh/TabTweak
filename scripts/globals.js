const hours = document.getElementById("hours");
const mkhi = document.getElementById("mkhi");
const minutes = document.getElementById("minutes");
const meridiem = document.getElementById("meridiem");
const greeting_msg = document.getElementById("greeting-msg");
const date = document.getElementById("date");
const name = document.getElementById("name");
const menu = document.getElementById("menu");


function update_bg(img){
    document.getElementById("root").style.setProperty('background',  `center / cover no-repeat url(${img})`)

    localStorage.setItem("tabtweak_IMG", img);
}

function get_bg_from_localStorage(){
    const img = localStorage.getItem("tabtweak_IMG");
    if(img) update_bg(img);
}

function get_name_from_localStorage(){
    name.textContent = localStorage.getItem('neutrabize_NAME') ?? name.textContent;
}

function read_localStorage(){
    get_name_from_localStorage();
    get_bg_from_localStorage();
}