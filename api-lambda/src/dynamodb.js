const AWS = require("aws-sdk");

const REGION = process.env.REGION;
AWS.config.update({region: REGION});

const ddb = new AWS.DynamoDB({apiVersion: "2012-08-10"});

const putItemToDDB = async (message) => {
  const params = {
    Item: {
      UserId: {
        N: message.id
      },
      Label: {
        S: message.label
      }
    },
    TableName: process.env.TABLE_NAME
  };

  try {
    await ddb.putItem(params).promise()
  } catch (e) {
    throw new Error("put item into dynamodb table failed", e.message);
  }
};

const getItemFromDDB = async (input) => {
  const params = {
    Key: {
      UserId: {
        N: input.id
      },
      Label: {
        S: input.label
      }
    },
    TableName: process.env.TABLE_NAME
  };

  try {
    const a = await ddb.getItem(params).promise()
    console.log(33 ,a);
  } catch (e) {
    throw new Error("get item into dynamodb table failed", e.message);
  }
};

module.exports = {
  putItemToDDB,
  getItemFromDDB
};
