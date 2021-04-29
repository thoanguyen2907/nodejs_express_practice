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

const getList =  () => {
    if(studentList) {
        return  studentList
    } else {
        return false; 
    }
}

const getDetail = async (id) => {
    
    let student = await studentList.find(item => item.id == id); 
    if(student)  {
        return student
    } else {
        return false; 
    }

}
const create = async (student) => {
    let  newStudent = await {...student, id: Math.floor(Math.random()) * 100}
    if(newStudent) {
        studentList = [...studentList, student];
}
return newStudent
}
const update = async (id, fullName, age, numberClass) => {
    let index = await studentList.findIndex(item => item.id == id); 
    if(index !== -1) {
        let oldStudent = studentList[index]; 
        let updatedStudent = {...oldStudent,fullName, age, numberClass }; 
        studentList[index] = updatedStudent; 
        return updatedStudent; 
    } else {
        return false; 
    }
}
const deleteById = async (id) => {

    let index = await studentList.findIndex(item => item.id == id); 
    if(index !== -1) {
        studentList.splice(index, -1);
        return studentList[index]; 
        } else {
            return false; 
        }
}

module.exports = {
    getList, 
    getDetail,
    create, 
    update, 
    deleteById
}
