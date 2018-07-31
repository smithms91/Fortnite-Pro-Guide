const express = require("express");
const app = express();
const path = require("path");
const request = require("request");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "./../../"));
app.use(morgan("combined"));
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./../../index.html");
});

app.post("/fortnite", (req, res) => {
  request.get(`https://api.fortnitetracker.com/v1/profile/${req.body.dropDownValue}/${req.body.epicUsername}`, {
    headers: {
      "TRN-Api-Key": "422c4273-3ca4-40e1-9c03-63088df1dbff"
    }
  }, function(error, response, body) {
      res.send(body);
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is listening on port: ${port}`));


// {
//   "name": "server",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "start": "node src/app.js",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "body-parser": "^1.18.3",
//     "cors": "^2.8.4",
//     "express": "^4.16.3",
//     "morgan": "^1.9.0",
//     "path": "^0.12.7",
//     "request": "^2.87.0"
//   }
// }
