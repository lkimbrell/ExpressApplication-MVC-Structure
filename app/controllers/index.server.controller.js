exports.render =
    function (req, res) {
        if (req.session.lastVisit) {
            console.log('Last visit was: ' + req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        res.status(200).render('index', {
            title: 'Hello, Landon Kimbrell'
        });
    };