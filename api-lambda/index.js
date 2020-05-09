const { getItemFromDDB } = require("./src/dynamodb");

exports.handler =  async function(event, context) {
  try {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
  } catch (e) {
    throw e;
  }
};
