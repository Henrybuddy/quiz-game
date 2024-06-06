let questionD = document.getElementById("question");
let optionA = document.getElementById("optionA");
let optionB = document.getElementById("optionB");
let optionC = document.getElementById("optionC");
let optionD = document.getElementById("optionD");
let name = document.getElementById('name')
let next = document.getElementById("next");
let current = document.getElementById("current");
let range = document.getElementById("range");
let progress = document.getElementById("progress");
let modal = document.getElementById('dmodal')
let score = document.getElementById('scoreDiv')
let Name = document.getElementById('name')
// let Name = document.getElementById('name')



const questions = [
  {
    id: 1,
    ask: "Kodu game lab is an Application use to program _______ for young ones.",
    correctOption: "Games",
    options: ["Fights", "Games", "Shooting", "eating codes"],
  },
  {
    id: 2,
    ask: "In the startup page of the Kodu Game Lab as shown above, you are required to fill your ________ in the Creator’s section",
    correctOption: "Nick name ",
    options: ["Real Name", "Nick name ", "Parent Name", "No name"],
  },
  {
    id: 3,
    ask: "To create a new game on kodu game lab, you have to click on _______",
    correctOption: "New world",
    options: ["New world", "load world", "kodu", "Community"],
  },
  {
    id: 4,
    ask: "To open a previous kodu game lab project, you have to click on ___________",
    correctOption: "load world",
    options: ["load world", "kodu", "Community", "New world"],
  },
  {
    id: 5,
    ask: "Kodu game lab has how many pre-designed worlds?",
    correctOption: "3",
    options: ["1", "2", "3", "4"],
  },
  {
    id: 6,
    ask: "World in Kodu game lab means ___________",
    correctOption: "Environment",
    options: ["Object", "house", "Environment", "universe"],
  },
  {
    id: 7,
    ask: "What tool do you use to add more field to your world?",
    correctOption: "Ground brush",
    options: ["Ground brush", "Home tool", "Object tool", "Path tool"],
  },
  {
    id: 8,
    ask: "To delete fields from your world, you need to _______ on the field spaces",
    correctOption: "Right click",
    options: ["Right click", "Left Click", "scroll", "Double click"],
  },
  {
    id: 9,
    ask: "To add fields your world using the object tool, you need to _______ on the empty spaces",
    correctOption: "Left Click",
    options: ["Left Click", "Right click", "scroll", "Double click"],
  },
  {
    id: 10,
    ask: "What tool do you use to add a character to your world?",
    correctOption: "Object tool",
    options: ["Object tool", "Home tool", "Ground brush", "Path tool"],
  },
  {
    id: 11,
    ask: "You delete a character by right clicking on it then selecting ______",
    correctOption: "Cut",
    options: ["Cut", "change setting", "program", "copy"],
  },
  {
    id: 12,
    ask: "To change the colour of a character, you put the arrow on it and press ______",
    correctOption: "Left and right arrow key",
    options: [
      "Left and right arrow key",
      "None",
      "Up and down arrow key",
      "Scroll button",
    ],
  },
  {
    id: 13,
    ask: "To change the direction a character facing, you put the arrow on it and press ______",
    correctOption: "Up and down arrow key",
    options: [
      "Left and right arrow key",
      "None",
      "Up and down arrow key",
      "Scroll button",
    ],
  },
  {
    id: 14,
    ask: "Apple is always hidden in what part of the select menu in kodu?",
    correctOption: "Objects",
    options: ["Objects", "None of the above", "Combat", "Rocks"],
  },
  {
    id: 15,
    ask: "The last line of code in Apple eating game is mainly for __________",
    correctOption: "Winning or ending",
    options: [
      "Winning or ending",
      "movement",
      "eating apple",
      "playing the game",
    ],
  },
  {
    id: 16,
    ask: "The first line of code in Apple eating game is mainly for__________",
    correctOption: "3D Animation",
    options: [
      "Winning or ending",
      "movement",
      "eating apple",
      "playing the game",
    ],
  },
  {
    id: 17,
    ask: "The Forward added to the shot missile prevents the Missile from _____________",
    correctOption: "Targeting our character continuously",
    options: [
      "Targeting our character continuously",
      "disappearing",
      "Moving on a straight path",
      "killing our character",
    ],
  },
  {
    id: 18,
    ask: "We _______ on a character to change its settings",
    correctOption: "Left Click",
    options: ["Left Click", "Right click", "scroll", "Double click"],
  },
  {
    id: 19,
    ask: "What tool do you use to save your world?",
    correctOption: "Home tool",
    options: ["Object tool", "Home tool", "Ground brush", "Path tool"],
  },
  {
    id: 20,
    ask: "The programming of Kodu Game Lab is based on two functions namely",
    correctOption: "When and Do",
    options: ["While and Do", "When and If", "If and Do", "When and Do"],
  },
];

let index = 0;
let questionTrack = 1;
let newQuestions = [];
let scores = []


const startApp = () => {
  let x = questions.sort(() => Math.random() - 0.5);
  newQuestions = [...x];
  // newQuestions.push(x)

  console.log(newQuestions);
  current.textContent = `Question  ${questionTrack} / ${newQuestions.length}`;
};
startApp();

next.addEventListener("click", (e) => {
  e.preventDefault();
  index+=1
  questionTrack += 1;
  current.textContent = `Question ${questionTrack} / ${newQuestions.length}`;
  progress.textContent = `${questionTrack} / ${newQuestions.length}`;
  progress.style.width = `${(questionTrack / newQuestions.length) * 100}%`;
  let eachQuestion = newQuestions[index];
  let corectOption = eachQuestion.correctOption;   

  questionD.textContent = eachQuestion.ask;
  optionA.textContent = eachQuestion.options[0];
  optionB.textContent = eachQuestion.options[1];
  optionC.textContent = eachQuestion.options[2];
  optionD.textContent = eachQuestion.options[3];

  // Returning the buttons back to no bg
  optionA.style.backgroundColor = "";
  optionB.style.backgroundColor = "";
  optionC.style.backgroundColor = "";
  optionD.style.backgroundColor = "";


  
  // Checking for correct options 
  optionA.addEventListener("click", () => {
    optionA.style.backgroundColor = "#107eeb";
    optionB.style.backgroundColor = "";
    optionC.style.backgroundColor = "";
    optionD.style.backgroundColor = "";

    if (optionA.textContent == corectOption) {
      console.log(true);
      scores.push(2)
    } else {
      console.log(false);
      scores.push(0)
    }
  });

  optionB.addEventListener("click", () => {
    optionB.style.backgroundColor = "#107eeb";
    optionA.style.backgroundColor = "";
    optionC.style.backgroundColor = "";
    optionD.style.backgroundColor = "";

    if (optionB.textContent == corectOption) {
      console.log(true);
      scores.push(2)
    } else {
      console.log(false);
      scores.push(0)
    }
  });

  optionC.addEventListener("click", () => {
    optionC.style.backgroundColor = "#107eeb";
    optionB.style.backgroundColor = "";
    optionA.style.backgroundColor = "";
    optionD.style.backgroundColor = "";

    if (optionC.textContent == corectOption) {
      console.log(true);
      scores.push(2)
    } else {
      console.log(false);
      scores.push(0)
    }
  });

  optionD.addEventListener("click", () => {
    optionD.style.backgroundColor = "#107eeb";
    optionB.style.backgroundColor = "";
    optionC.style.backgroundColor = "";
    optionA.style.backgroundColor = "";

    if (optionD.textContent == corectOption) {
      console.log(true);
      scores.push(2)
    } else {
      console.log(false);
      scores.push(0)
    }
  });


  if (questionTrack == questions.length) {

    
    next.textContent = 'SUBMIT'

    if(next.textContent == 'SUBMIT'){
      console.log(scores.reduce((a, b)=> a + b));
      scores.reduce((a,b)=>a+b)
  window.location.href = './score.html'
  localStorage.setItem('Scores', JSON.stringify(scores))
      
      
    }

   

  }
 


});

const displayandCheckQuestions = () => {
  console.log(newQuestions[0].options);
  let eachQuestion = newQuestions[0];
  let corectOption = eachQuestion.correctOption;

  questionD.textContent = eachQuestion.ask;
  optionA.textContent = eachQuestion.options[0];
  optionB.textContent = eachQuestion.options[1];
  optionC.textContent = eachQuestion.options[2];
  optionD.textContent = eachQuestion.options[3];




  optionA.addEventListener("click", () => {

  

    optionA.style.backgroundColor = "#107eeb";
    optionB.style.backgroundColor = "";
    optionC.style.backgroundColor = "";
    optionD.style.backgroundColor = "";

    if (optionA.textContent == corectOption) {
      console.log(true);
      scores.push(2)
    } else {
      console.log(false);
      scores.push(0)
    }
  });

  optionB.addEventListener("click", () => {
    optionB.style.backgroundColor = "#107eeb";
    optionA.style.backgroundColor = "";
    optionC.style.backgroundColor = "";
    optionD.style.backgroundColor = "";

    if (optionB.textContent == corectOption) {
      console.log(true);
      scores.push(2)
    } else {
      console.log(false);
      scores.push(0)
    }
  });

  optionC.addEventListener("click", () => {
    optionC.style.backgroundColor = "#107eeb";
    optionB.style.backgroundColor = "";
    optionA.style.backgroundColor = "";
    optionD.style.backgroundColor = "";

    if (optionC.textContent == corectOption) {
      console.log(true);
      scores.push(2)
    } else {
      console.log(false);
      scores.push(0)
    }
  });

  optionD.addEventListener("click", () => {
    optionD.style.backgroundColor = "#107eeb";
    optionB.style.backgroundColor = "";
    optionC.style.backgroundColor = "";
    optionA.style.backgroundColor = "";

    if (optionD.textContent == corectOption) {
      console.log(true);
      scores.push(2)
    } else {
      console.log(false);
      scores.push(0)
      console.log(scores);
    }
  });




};

displayandCheckQuestions();

function nameDisp() {
  let nameLog = JSON.parse(localStorage.getItem('Database'))
 name.textContent =`Welcome, ${nameLog.name}`
 console.log(nameLog.name);


} 
nameDisp()

if (next.textContent == 'SUBMIT') {
  next.addEventListener('click',(e)=>{
   window.location.href = './score.html'
  //  document.getElementById('name2').textContent = `Welcome, ${nameLog.name}`



  })

   
 }

b