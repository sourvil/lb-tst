'use strict';

var fs = require('fs');
var pdf = require('html-pdf');

module.exports = function (Country) {

    Country.exportPdf = function (param, cb) {

        var html = fs.readFileSync('./test.html', 'utf8');
        var options = { format: 'Letter' };

        pdf.create(html, options).toFile('./test.pdf', function (err, res) {
            if (err) return console.log(err);
            console.log(res); // { filename: '/app/businesscard.pdf' }
            cb(null, res);
        });
    }

    Country.remoteMethod("exportPdf", {
        http: { path: '/exportPdf', verb: 'post', status: 200 },
        accepts: [
            { arg: 'param', type: 'object', http: { source: 'body' } }
        ],
        returns: { root: true, type: 'object' }
    });

};
