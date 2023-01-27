
exports.getDevice = async (req,res) => {
    try {
        //await get device data from DB
        console.log(req.body.userName)
        res.render('device', {title: "registerd devices"})
    } catch (error) {
        console.error(error);
    }
}

exports.getLocation = (req,res) => {
    res.render('tracking')
}