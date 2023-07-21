const hammer = document.querySelector("#hammer");
const mouse = document.querySelector("#mouse");
const score = document.querySelector('#score')
const level = document.querySelector('#level')


let innerWidth = window.innerWidth - 50;
let innerHeight = window.innerHeight - 50;
const audio = new Audio()
audio.src = './hammer.mp3'
let sum = 0
let grade
let interVal

document.addEventListener("mousemove", moveMouse);

level.addEventListener("change", () => {
    let grade = level.value
    console.log(grade)
    f1()
    
    
})

function moveMouse(e) {
  let x = e.clientX;
  let y = e.clientY;

  hammer.style.left = `${x}px`;
  hammer.style.top = `${y}px`;
}



mouse.addEventListener('click', () => {
    mouse.style.display = 'none'
    audio.play()
    sum += 1
    score.innerHTML = `${sum}`
    hammer.style.transform = `rotate(-30deg)`
    setTimeout(() => {
        hammer.style.transform = `rotate(0deg)`
        
    }, 300)
})

function changeTimer() {
    grade = level.value
}

function f1() {
    clearInterval(interVal)
    let top = Math.random() * innerWidth;
        let left = Math.random() * innerHeight;
      
        mouse.style = `
              transition: 0.3s;
              left: ${top}px;
              top: ${left}px;
          `;
    changeTimer()
    interVal = setInterval(f1, grade)
}

