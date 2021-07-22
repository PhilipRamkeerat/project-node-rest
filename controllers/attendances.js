
module.exports = app => {
    app.get("/attendances", (req, res) => res.send('You are on attendances GET'));

    app.post('/attendances', (req, res) => {
        console.log(req.body);
        res.send('Make attendances POST');
    });
}
