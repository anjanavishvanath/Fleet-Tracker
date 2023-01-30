const Device = require('../models/Device')

exports.getDevice = async (req,res) => {
    try {
        res.render('device', {title: "registerd devices", user: req.user.userName})
        console.log(req.user)
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

exports.getLocation = (req,res) => {
    res.render('tracking')
}