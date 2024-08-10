const advice = document.getElementById("advice");
const adviceid = document.getElementById("adviceid");
const btn = document.getElementById("btn");

const url = "https://api.adviceslip.com/advice";

let getadvice= () =>{
    fetch(url)
    .then(data=>data.json())
    .then(slip=>{
        advice.textContent= `"${(slip.slip.advice)}"`
        adviceid.textContent=`Advice #${(slip.slip.id)}`
    })
}
btn.addEventListener("click",getadvice)
getadvice();
