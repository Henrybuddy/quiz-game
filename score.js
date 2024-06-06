let scores = localStorage.getItem('Scores')
let normScore = JSON.parse(scores)
console.log(normScore);
let roundedScore =  normScore.reduce((a,b)=>a+b)

let scorenum = document.getElementById('scoreDiv')

scorenum.textContent = `Your score is ${roundedScore/2}/20`

function nameDisp() {
    let nameLog = JSON.parse(localStorage.getItem('Database'))
   document.getElementById('nameDiv').textContent = `Hey  ${nameLog.name}`
   console.log(nameLog.name);
  
  
  } 
  nameDisp()