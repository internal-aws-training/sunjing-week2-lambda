const AWS = require("aws-sdk");

const REGION = process.env.REGION;
AWS.config.update({region: REGION});

const ddb = new AWS.DynamoDB({apiVersion: "2012-08-10"});

const putItemToDDB = async () => {
  const params = {
    Item: {
      UserId: {
        N: 1
      },
      Label: {
        S: "green"
      },
      Filename: {
        S: "cute_cat.png"
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

module.exports = {
  putItemToDDB
};
