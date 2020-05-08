const { putItemToDDB } = require("./src/dynamodb");

exports.handler =  async function(event, context) {
  try {
    await putItemToDDB();
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
  } catch (e) {
    throw e;
  }
};
