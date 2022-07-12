const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

var tokken;

async function auth() {
  axios({
    method: "post",
    url: "https://apis-sandbox.fedex.com/oauth/token",
    data: "grant_type=client_credentials&client_id=l7621deee255a14b188e358458e1a5c5c7&client_secret=e474e2ecde9a447ab62aa1ce443e192c",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then(async (response) => {
      //   data = await response.data.json();
      tokken = await response.data.access_token;
     
    })
    .catch((error) => {
      console.log(error);
    });
}
auth();
setInterval(auth, 3600000);

app.post("/fedex", (req, res) => {

  console.log(req.body.trackingNumber);


  let headersList = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + tokken
  }

  let bodyContent = JSON.stringify({
    "trackingInfo": [{
      "trackingNumberInfo": {
        "trackingNumber": req.body.trackingNumber
      }
    }],
    "includeDetailedScans": true
  });


  axios({
    url: "https://apis-sandbox.fedex.com/track/v1/trackingnumbers",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  }).then((response) => {
    res.send(response.data);
  }).catch((error) => {
    res.send(error);
  });
});

app.listen(port);



