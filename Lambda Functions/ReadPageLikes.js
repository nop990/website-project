//This function reads the number of likes from the DynamoDB table
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async (event, context, callback) => {
    await agree().then((data) => {
        callback(null, {
            statusCode: 200,
            body: data,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        });
    }).catch((err) => {
        console.error(err);
    });
};

function agree() {
    const params = {
      TableName: 'Likes',
	  Select: 'COUNT'
    }
    return ddb.scan(params).promise();
}
