const nutButton = document.getElementById('nut');
const nonutButton = document.getElementById('no-nut');
const container = document.getElementById('container');
let buttonPressed = false;

document.addEventListener("DOMContentLoaded", getStatus);
nutButton.addEventListener('click',Nut);
nonutButton.addEventListener('click',NoNut);

console.log('your mom');

function Nut(e)
{
    if(!buttonPressed)
    {
        e.preventDefault();
        const row = document.createElement("div");
        const message = document.createElement("h1");
        message.classList.add('display-5');
        message.classList.add('text-center');
        message.innerHTML = "YOU LOST NO NUT NOVEMBER";
        message.style.color = "red";
        row.appendChild(message);
        container.appendChild(row);
        buttonPressed = true;
        saveLocal(true);
    }
}

function NoNut(e)
{
    if(!buttonPressed)
    {
        e.preventDefault();
        const row = document.createElement("div");
        const message = document.createElement("h1");
        message.classList.add('display-5');
        message.classList.add('text-center');
        message.innerHTML = "YOU WON NO NUT NOVEMBER";
        message.style.color = "green";
        row.appendChild(message);
        container.appendChild(row);
        buttonPressed = true;
        saveLocal(false);
    }
}

function saveLocal(nut) {
    if (localStorage.getItem("cum") === null) {
        localStorage.setItem("cum", nut);
    } 
  }
  

function getStatus(e)
{
    let cumStatus = localStorage.getItem('cum');
    if(cumStatus !== null)
    {
        const row = document.createElement("div");
        const message = document.createElement("h1");
        message.classList.add('display-5');
        message.classList.add('text-center');
        cumStatus ? message.innerHTML = "YOU LOST NO NUT NOVEMBER": message.innerHTML = "YOU WON NO NUT NOVEMBER";
        cumStatus ? message.style.color = "red": message.style.color = "green";
        row.appendChild(message);
        container.appendChild(row);
        buttonPressed = true;
    }
}