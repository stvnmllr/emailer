
console.log('super1');
var nodemailer = require('nodemailer');

console.log('super2');

const { EMAIL_USER } = process.env;
const { EMAIL_PASS } = process.env;

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
//     port: 587, // SMTP PORT
    secure: true, // true for 465, false for other ports
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

console.log('super34' + EMAIL_USER);

exports.handler = (event, context, callback) => {
    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            //'Access-Control-Allow-Methods': 'POST'
        },
    });

     let _body = {object: 1, fielda: '123'};

    let body_txt='<h2>Contact Form Details</h2>';
//     for (var key in _body) {
//         var res = key.replace("_", " ");
//         body_txt +='<p><strong>' + titleCase(res) +' : </strong>'+_body[key] + '</p>';
//     }


    let mailOptions = {
        from: 'cmiordering@gmail.com',
        to: 'thatguy1177@gmail.com',
        subject: 'A new message for you',
        html: body_txt
    };
console.log(mailOptions)
    
//     transporter.sendMail(mailOptions, done(null,_body));
};

// convert the key as the label
// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         // You do not need to check if i is larger than splitStr length, as your for does that for you
//         // Assign it back to the array
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//     }
//     // return the joined string
//     return splitStr.join(' ');
// }
