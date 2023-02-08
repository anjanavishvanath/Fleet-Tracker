const Device = require('../models/Device');
const DeviceLoc = require('../models/DeviceLoc');

exports.getDevice = async (req,res) => {
    try {
        const Devices = await Device.find({user: req.user._id})
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
            deviceName: req.body.deviceName,
            user: req.user._id
        })
        console.log('"Device has been added')
        res.redirect('/device')
    } catch (error) {
        console.error(error)
    }
}

exports.getLocation = async (req,res) => {
    const deviceData = await DeviceLoc.findOne({deviceID: req.params.id})
    console.log(deviceData.lon)
    res.render('tracking',{lon:deviceData.lon, lat:deviceData.lat})
}

exports.postLocation = async (req, res) => {
    const updateLocation = () => {
      return DeviceLoc.findOneAndUpdate(
        { deviceID: req.body.deviceID },
        {
          lon: req.body.lon,
          lat: req.body.lat
        },
        {
          upsert: true,
          new: true
        }
      );
    };
  
    try {
      const data = await updateLocation();
      console.log(data);
      res.send(data)
    } catch (err) {
      console.error(err);
    }
  };

  exports.getClientData = async (req,res) => {
    try {
        const deviceData = await DeviceLoc.find({deviceID: req.params.id})
        res.json(deviceData)
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
  }

  exports.deleteDevice = async (req,res) => {
    console.log(req.body.devicetoDlt)
    try {
      await Device.findOneAndDelete({_id:req.body.devicetoDlt})
      res.json('Deleted it')
    } catch (error) {
      console.error(error)
    }
  }
  