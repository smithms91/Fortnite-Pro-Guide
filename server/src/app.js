const express = require("express");
const app = express();
const path = require("path");
const request = require("request");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "static")));
app.use(morgan("combined"));
app.use(cors());

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "../../../src/App.vue"));
// });

app.post("/fortnite", (req, res) => {
  request.get(`https://api.fortnitetracker.com/v1/profile/${req.body.dropDownValue}/${req.body.epicUsername}`, {
    headers: {
      "TRN-Api-Key": "422c4273-3ca4-40e1-9c03-63088df1dbff"
    }
  }, function(error, response, body) {
      res.send(body);
  });
});

let port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is listening on port: ${port}`));