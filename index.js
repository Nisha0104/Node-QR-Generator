// To display data using QR code using node js
const qr = require("qrcode"); //install qr comment using "npm install --save qrcode"
let data = {
  name: "Nisha",
  email: "nisha01042002@gmail.com",
  id: "1921031",
};
let strJson = JSON.stringify(data); //convert all the data in json to string
// type:terminal ---end point (It indicate the where to show the qr code)
qr.toString(strJson, { type: "terminal" }, function (err, code) {
  if (err) {
    return console.log(err);
  } else {
    console.log(code);
  }
});
// to get the decoded qr link qr.toDataURL is used
qr.toDataURL(strJson, function (err, code) {
  if (err) {
    return console.log(err);
  } else {
    console.log(code);
  }
});
