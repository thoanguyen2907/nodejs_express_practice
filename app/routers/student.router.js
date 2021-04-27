const express = require('express'); 
const { getStudentList, getStudentDetailById, createNewStudent, updateStudent } = require('../controllers/student.controllers');

const studentRouter = express.Router(); 

let studentList = [
    {
        id: 1, 
        fullName: "Thoa Nguyen", 
        age: 25, 
        numberClass: 10
    }, 
    {
        id: 2, 
        fullName: "Tâm Nguyen", 
        age: 18, 
        numberClass: 8
    }, 
    {
        id: 3, 
        fullName: "Truc Nguyen", 
        age: 23, 
        numberClass: 11
    }
]

studentRouter.get('/', getStudentList); 
  
  //lấy thông tin chi tiết
  studentRouter.get('/:id', getStudentDetailById);
  
  //thêm học sinh 
  studentRouter.post('/', createNewStudent); 
  
    studentRouter.put('/:id', updateStudent); 

    studentRouter.delete('/:id', deleteStudent);

module.exports = {
    studentRouter
}
