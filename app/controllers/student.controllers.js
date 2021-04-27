
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


const getStudentList  = (req, res) => {
    res.status(200).send(studentList); 
}

const getStudentDetailById = (req, res) => {
    let {id}  = req.params; 
    let index = studentList.findIndex(item => item.id == id); 
    if(index !== -1){
        let studentInfo = studentList[index];
        res.status(200).send(studentInfo)
    } else {
        res.status(401).send("NOT FOUND")
    }
}

const createNewStudent = async (req, res) => {
        let student = await req.body; 
        student = {...student, id: Math.floor(Math.random()) * 100}
        if(student) {
            studentList = [...studentList, student];
            res.status(201).send("Add a new student successfully !! ")
        } else {
            res.send("Unsuccessful !!")
        }
}

const updateStudent = async (req, res) => {
    let {id} = await req.params; 
    let {fullName, age, numberClass} = await req.body; 
    let index = studentList.findIndex(item => item.id == id); 
    if(index !== -1) {
        let oldStudent = studentList[index]; 
        let updatedStudent = {...oldStudent,fullName, age, numberClass }; 
        studentList[index] = updatedStudent; 
        res.status(200).send("Update student")
    } else {
        res.send("NOT FOUND")
    }
}
const deleteStudent =  async (req, res) => {    
    let {id} = await req.params; 
    let index = studentList.findIndex(item => item.id == id); 
    if(index !== -1) {
    studentList.splice(index, -1);
        res.status(200).send("Delete student: " + JSON.stringify(studentList[index]))
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