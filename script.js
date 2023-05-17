const clock = document.querySelector(".clock")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")


btn1.addEventListener("click", ()=>{
    btn1.disabled = true;
    btn2.disabled = false;
})

btn2.addEventListener("click", ()=>{
    btn2.disabled = true;
    btn1.disabled = false;
})

let second = 0;
let minute = 0;
let hour = 0;
let intervalId;
let time = `${00}:${00}:${00}`


const start = ()=>{
   intervalId =  setInterval (()=>{
        second++
        if(second >= 59){
            minute++
            second = 0
        } else if(minute >= 60){
            hour++
            minute = 0

        }

        let hours = String(hour).padStart(2, "0")
        let minutes = String(minute).padStart(2, "0")
        let seconds = String(second).padStart(2, "0")

         time = `${hours}:${minutes}:${seconds}`
         clock.innerText = time

    },1000)
}

const stop = ()=> {
    clearInterval(intervalId)
}

btn3.addEventListener("click", ()=>{
    location.reload()
})