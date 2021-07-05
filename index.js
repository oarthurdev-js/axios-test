const axios = require('axios');
var data;


function usersWeplot(){
   return axios.get("https://backend.weplot.co/user");
}

var { id, first_name, last_name, email} = usersWebplot();

var data = {
    id: id,
    first_name: first_name,
    last_name: last_name,
    email: email
}


data = usersWebplot();
data.then(function(res){
    console.log(res.data[0])
})

module.exports = usersWeplot();