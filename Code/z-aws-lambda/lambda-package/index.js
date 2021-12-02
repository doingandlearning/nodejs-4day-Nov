const axios = require("axios");

exports.handler = async (event) => {
  const catFact = await axios.get(
    "https://cat-fact.herokuapp.com/facts/random"
  );

  return {
    statusCode: 200,
    body: JSON.stringify(`Here is a random cat fact: ${catFact.data.text}`),
  };
};
