const checkEmpty = (req, res, next) => {
const {fullName, age, numberClass} = req.body; 

if(fullName && age && numberClass) {
    next(); 
} else {
    res.send("fullName , age,  numberClass không được để rỗng !!!"); 
}

}
const checkNumberClass = (req, res, next) => {
    const {numberClass} = req.body; 
    if(numberClass >= 1 && numberClass <= 12) {
        next(); 
    } else {
        res.send("numberClass phải lớn hơn 1!!!"); 
    }
}

module.exports = {
    checkEmpty,
    checkNumberClass
}