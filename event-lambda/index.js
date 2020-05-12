const { putItemToDDB } = require("./src/dynamodb");

exports.handler =  async function(event, context) {
  try {
    let message  = event.Records[0].Sns.Message;
    message = JSON.parse(message);
    await putItemToDDB(message);
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
  } catch (e) {
    throw e;
  }
};
