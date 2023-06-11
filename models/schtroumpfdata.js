const mongoose =require('mongoose');

const schtroumpfSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        
    },
    role: {
        type: String,
        required: true, 
    },
    amis:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Schtroumpf' }]
})


var schtroumpfdata=mongoose.model('schtroumpfdata',schtroumpfSchema);
module.exports= schtroumpfdata;