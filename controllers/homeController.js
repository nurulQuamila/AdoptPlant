exports.sendReqParam = (req, res) => {
    let cact = req.params.cactus;
    res.send(`This is the page for ${cact}`);
};