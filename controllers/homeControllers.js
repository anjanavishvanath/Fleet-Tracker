module.exports = {
    getIndex: (req,res) => {
        res.render('index', {title:"Home"});
    },
    getReg: (req,res) => {
        res.render('register', {title: "Register"});
    }
}