const nutButton = document.getElementById('nut');
const nonutButton = document.getElementById('no-nut');
const container = document.getElementById('container');
const resetButton = document.getElementById('reset');
let buttonPressed = false;
const NNNStartDate = new Date("2020-11-1");
document.addEventListener("DOMContentLoaded", getStatus);
nutButton.addEventListener('click',Nut);
nonutButton.addEventListener('click',NoNut);
resetButton.addEventListener('click',resetStatus);

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
        saveLocal(1);
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
        message.innerHTML = "Good job! Keep working and come back tomorrow!";
        message.style.color = "green";
        row.appendChild(message);
        container.appendChild(row);
        buttonPressed = true;
        saveLocal(0);
    }
}

function saveLocal(nut) {
    if (localStorage.getItem("cum") === null) {
        localStorage.setItem("cum", nut);
    } 
}
  
function resetStatus(e)
{
    localStorage.removeItem('cum');
    location.reload();
}


function getStatus(e)
{
    let cumStatus = localStorage.getItem('cum');
    if(cumStatus)
    {
        const row = document.createElement("div");
        const message = document.createElement("h1");
        message.classList.add('display-5');
        message.classList.add('text-center');
        console.log(cumStatus);
        if(cumStatus == true)
        {
            message.innerHTML = "YOU LOST NO NUT NOVEMBER";
            message.style.color = "red";
        }
        else 
        {
            message.innerHTML = "Good job! Keep working and come back tomorrow!";
            message.style.color = "green";
        }
        row.appendChild(message);
        container.appendChild(row);
        buttonPressed = true;
        console.log(NNNStartDate);
    }
}

function StartLiveUpdate(e){
    const timer = document.getElementById('timer');
    setInterval(function(){
        fetch('Timer.php')
        .then(function(response){ 
            return response.json();
         })
        .then(function(data){ timer.innerHTML = data.timer; })
        .catch(function(e) { console.log(e.toString()); });
    }, 2000);
}

document.addEventListener('DOMContentLoaded',StartLiveUpdate);