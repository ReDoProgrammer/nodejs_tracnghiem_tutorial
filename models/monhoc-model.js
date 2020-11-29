const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monhocSchema = new Schema({
    ten_mon_hoc:{
        type:String
    },
    cau_hoi:[{
        type:Schema.Types.ObjectId,
        ref:'cauhoi'
    }]
})

module.exports = mongoose.model("monhoc",monhocSchema);