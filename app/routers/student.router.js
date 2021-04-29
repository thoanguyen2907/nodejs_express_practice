const express = require('express'); 
const { getStudentList, getStudentDetailById, createNewStudent, updateStudent, deleteStudent } = require('../controllers/student.controllers');
const { checkEmpty, checkNumberClass } = require('../middlewares/validations/student.validations');

const studentRouter = express.Router(); 


studentRouter.get('/', getStudentList); 
  
  //lấy thông tin chi tiết
  studentRouter.get('/:id', getStudentDetailById);
  
  //thêm học sinh 
  studentRouter.post('/', checkEmpty, checkNumberClass, createNewStudent); 
  
    studentRouter.put('/:id', updateStudent); 

    studentRouter.delete('/:id', deleteStudent);

module.exports = {
    studentRouter
}
