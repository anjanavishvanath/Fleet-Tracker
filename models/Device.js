const mongoose = require('mongoose');

const  DeviceSchema = new mongoose.Schema({
    deviceID: {type: String, required: true},
    deviceName: {type: String, required: true},
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