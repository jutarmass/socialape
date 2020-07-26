console.log(`${new Date().toISOString()} => start loading data...`);

const axios = require("axios");

const baseUrl = "https://us-central1-socialape-cdd44.cloudfunctions.net/api";
const loginUrl = `${baseUrl}/login`;
const loginData = {
  email: "kim@wetherdale.com",
  password: "123456",
};

const postOneScreamUrl = `${baseUrl}/scream`;
axios
  .post(loginUrl, loginData)
  .then((res) => {
    let token = res.data.token;
    console.log(token);
    let headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(`${new Date().toISOString()} => start posting scream...`);
    [1, 2, 3].map((i) => {
      const screamData = {
        userHandle: "kim",
        body: `Screamed at ${new Date().toTimeString()} - No.${i}`,
      }
      axios({
        method: "post",
        url: postOneScreamUrl,
        data: screamData,
        headers: headers,
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(`${new Date().toISOString()} => error ${err} ...`);
        })
        .then(() => {
          console.log(
            `${new Date().toISOString()} => finish posting scream ...`
          );
        });
    });
  })
  .catch((err) => {
    console.error(`${new Date().toISOString()} => error ${err} ...`);
  })
  .then(() => {
    console.log(`${new Date().toISOString()} => finish logging in...`);
  });
