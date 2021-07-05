const axios = require('axios');
const {hapikey} = require('../../configuration/configuration');
const Yup = require('yup');


class InsertControllerHubspot {

    async store(req, res) {

        const schema = Yup.object().shape({
            id: Yup.string().required(),
            first_name: Yup.string().required(),
            last_name: Yup.string().required(),
            email: Yup.string().required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(402).json({
                error: true,
                message: "Invalid data"
            })
        }

        const {id, first_name, last_name, email} = req.body;
    
        axios({
            method: 'post',
            url: `https://backend.weplot.co/user/?hapikey=${hapikey}`,//<- this is a example. insert your url hubspot api here 
            data: {
                "properties": [ //here are the expected properties of the people who were registered in your post method in your registration form
                {
                    "property": "id", "value": id
                },
                {
                    "property": "first_name", "value": first_name
                },
                {
                    "property": "last_name", "value": last_name
                },
                {
                    "property": "email", "value": email
                }
                ]
            }
        }).then((res) =>{
            console.log("user registered successful") //in this case, the user is registered successfully
        })
        .catch((error)=>{
            console.log("error on register user") //in this case, the user is not registered
            console.log(error) //error has generate here
        })

        const data = {
            id,
            first_name,
            last_name,
            email
        }

        const contactDatabase = await Contact.create(data, (err)=> {
            if(err) res.status(402).json({
                error: true,
                message: "It was not possible to register the contact"
            })

            return res.status(200).json({
                error: false,
                message: "Contact was registered successfully",
                contactDatabase
            })
        })
    }


}


module.exports = new InsertControllerHubspot();