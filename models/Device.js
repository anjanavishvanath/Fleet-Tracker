const mongoose = require('mongoose');

const  DeviceSchema = new mongoose.Schema({
    deviceID: {type: String, required: true},
    lon: {type: Number, required: true},
    lat: {type: Number, required: true},
    sentAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});

module.exports = mongoose.model("Device", DeviceSchema);