import { DynamoDB } from "aws-sdk";
import * as AWS from "aws-sdk";

//console.log(process.env.REACT_APP_AWS_ACCESS_KEY_ID);

AWS.config = new AWS.Config();
AWS.config.update({
  region: "ap-southeast-2",
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  },
});
//console.log(AWS.config.credentials);
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
