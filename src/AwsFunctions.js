import * as AWS from "aws-sdk";

AWS.config = new AWS.Config();
AWS.config.update({
  region: "ap-southeast-2",
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  },
});

const docClient = new AWS.DynamoDB.DocumentClient();

export function callback(params) {
  docClient.scan(params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
    } else {
      console.log(data.Items[0].Time); // successful response
      return data;
    }
  });
}
export function fetchData(tableName, callback) {
  var params = {
    TableName: tableName,
  };
  var response = callback(params);
  console.log(response);
  return response;
}
