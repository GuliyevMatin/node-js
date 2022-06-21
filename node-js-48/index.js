// import inquirer from 'inquirer' 
var classRoom = require("./classRoom")
var students = require("./students")

var botClass = new classRoom("Elsad",1)

botClass.addStudent("metin","cebr",5)
botClass.addStudent("ayten","az",3)


console.log(botClass);

