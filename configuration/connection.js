const yourDatabase; // import your preferred database here


class Database{
    constructor(){
        this.yourDatabase(); //here, your insert your database params, i using mongoDB for this example!
    }

    mongoDatabase(){
        this.connection = mongoose.connect('',{ /* again, here you set the  relative path to your database*/
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(()=>{
            console.log('connection established'); //here the conection has established
        }).catch((error)=>{
            console.log(`error ${error}`) //the error appears if the connection is not properly established
        })
    }
}

module.exports = new Database();