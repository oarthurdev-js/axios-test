module.exports = async(req, res, next) => {
    console.log("Access the middlewares") 
    next();
}
//here an interruption is made to check if the validation was passed