var students = require('./students')

let classRoom = function ( professor, room) {
  this.students = [];

  this.professor = professor;
  this.room = room;
  this.addStudent = function(name,subject,current){
    this.students.push(new students(name,subject,current))
  }
//   this.icaze = function () {};

};


module.exports = classRoom