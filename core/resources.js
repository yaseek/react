
module.exports = function (app) {

    // app resources

    app.get('/', function (req, res) {
        res.redirect('/index.html');
    });

};