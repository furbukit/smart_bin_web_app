import { DynamoDB } from "aws-sdk";
import * as AWS from "aws-sdk";

const config = {
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  accessSecretKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: "ap-southeast-2",
  output: "json",
};

AWS.config.update(config);

console.log(AWS.config.credentials.accessKeyId);

var docClient = new DynamoDB.DocumentClient();

export const fetchData = (tableName) => {
  var params = {
    TableName: tableName,
  };

  docClient.scan(params, function (err, data) {
    if (!err) {
      console.log(data);
    }
    if (err) {
      console.log(err);
    }
  });
};
