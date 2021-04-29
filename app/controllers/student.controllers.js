const { getList } = require("../services/student.services");


const getStudentList  = async (req, res) => {
    let studentList = await getList(); 
    if(studentList) {
        res.status(200).send(studentList); 
    } else {
        res.status(404).send("NOT FOUND"); 
    }
   
}

const getStudentDetailById = async (req, res) => {
    let {id}  = await req.params; 
    let student =  await getDetail(id)
    if(student){
        res.status(200).send(student)
    } else {
        res.status(401).send("NOT FOUND")
    }
}

const createNewStudent = async (req, res) => {
        let student = await req.body; 
       let newStudent =  create(student)
        if(newStudent) {
            res.status(201).send("Add a new student successfully !! ")
        } else {
            res.send("Unsuccessful !!")
        }
}

const updateStudent = async (req, res) => {
    let {id} = await req.params; 
    let {fullName, age, numberClass} = await req.body; 
    let updateStudent = update(id, fullName, age, numberClass); 
    if(updateStudent) {
        res.status(200).send("Update student")
    } else {
        res.send("NOT FOUND")
    }
}
const deleteStudent =  async (req, res) => {    
    let {id} = await req.params; 
    let deletedStudent = deleteById(id)
    if(deletedStudent){
        res.status(200).send("Delete student")
    } else {
        res.status(404).send("NOT FOUND")
    }
  }


module.exports = {
    getStudentList, 
    getStudentDetailById,
    createNewStudent, 
    updateStudent, 
    deleteStudent
}