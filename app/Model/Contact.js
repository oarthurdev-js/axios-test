const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Contact = new mongoose.Schema({
    id: { type: Number, required: true },
    first_name: { type: String, required: true},
    last_name: { type: String, required: true },
    email: { type: String, required: true }
},
{
    timestamps: true,
});

Contact.plugin(mongoosePaginate);

module.exports = mongoose.model("Contact", Contact);
