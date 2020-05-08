const { putItemToDDB } = require("./src/dynamodb");

exports.handler =  async function(event, context) {
  try {
    const message  = event.Records[0].Sns.Message;
    await putItemToDDB(message);
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
  } catch (e) {
    throw e;
  }
};
