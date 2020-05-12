const { getItemFromDDB } = require("./src/dynamodb");

exports.handler =  async function(event, context) {
  try {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    const input = {
      id: event.id,
      label: event.label
    };
    const result = await getItemFromDDB(input);
    if(event.label=="red")
      return {statusCode: 400, body: "oh no! error"};
    else {
      return {statusCode: 200, body: JSON.stringify(result)};
    }
  } catch (e) {
    throw e;
  }
};
