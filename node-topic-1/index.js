import inquirer from "inquirer";

// let pass = "123456"
// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?",
//     },
//     {
//       type: "input",
//       name: "age",
//       message: "How old are you?",
//     },
//     {
//       type: "checkbox",
//       name : "city",
//       message : "Where are you from?",
//       choices : [
//         "New York",
//         "Los Angeles",
//         "Chicago",
//       ],

//     }
//     ,
//     {
//       type: "list",
//       name: "color",
//       message: "What is your favorite color?",
//       choices: [
//         "red",
//         "blue",
//       ]
//     },

//     {
//       type:"password",
//       name : "password",
//       message : "What is your password?",
//       mask : "*",

//     }
//   ])
//   .then((answers) => {
//     answers.password === pass ? console.log(answers) : console.log("Wrong");
//   });

function Game(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
  goodGame = () => {
    console.log("dfdf");
  };
  badGame = () => {};
  printstats = () => {};
}



let player1 = new Game();
let player2 = new Game();

// inquirer.prompt([
//     {
//         type:"number",
//         name: "number",
//         message:"Choose number between [1-5]"
//     }
// ]).then((answers)=>{
//     startGame(answers)
// })

// function startGame(data){
//     let randomNum = Math.floor(Math.random() * 5)

// }
