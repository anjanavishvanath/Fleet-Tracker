const Device = require('../models/Device')

exports.getDevice = async (req,res) => {
    try {
        const Devices = await Device.find()
        res.render('device', {title: "registerd devices", user: req.user.userName, devices: Devices})
    } catch (error) {
        console.error(error);
    }
}

exports.postDevice =async (req,res) => {
    console.log(req.body.device)
    try {
        const newDevice = await Device.create({
            deviceID: req.body.device,
            deviceName: req.body.deviceName
        })
        console.log('"Device has been added')
        res.redirect('/device')
    } catch (error) {
        console.error(error)
    }
}

exports.getLocation = async (req,res) => {
    const deviceData = await Device.find({deviceID: req.params.id})
    console.log(deviceData)
    res.render('tracking')
}


//does not work
exports.postLocation = (req,res) => {
    console.log("Hello")
}