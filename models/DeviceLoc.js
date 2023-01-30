const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    deviceID : {type: String, required: true},
    lon: {type: Number, required:true},
    lat: {type: Number, required:true},
    sentAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("DeviceLoc", DataSchema)