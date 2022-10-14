import * as AWS from "aws-sdk";

AWS.config = new AWS.Config();
AWS.config.update({
  region: "ap-northeast-1",
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  },
});

const docClient = new AWS.DynamoDB.DocumentClient();

export const fetchData = () => {
  var params = {
      TableName: 'smartbin_analytics'
  }

  docClient.scan(params, function (err, data) {
      if (!err) {
          console.log(data)
      }
      else {
        console.log(err)
      }
  })
}