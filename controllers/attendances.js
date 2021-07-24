const Attendance = require('../models/attendances')
module.exports = app => {
    app.get("/attendances", (req, res) => {
        Attendance.list(res);
    });

    app.get('/attendances/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Attendance.findById(id, res)
    })

    app.post('/attendances', (req, res) => {
        const attendance = req.body

        Attendance.add(attendance, res)
    });
}
