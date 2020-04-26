//This function picks a random string from an array that can be displayed via the 'GET' function in the API Gateway
exports.handler = async (event) => {
    //Array
    const flower = ['Lily of the Valley', 'Rose', 'Carnation', 'Plumeria', 'Marigold'];
    //random selecter
    const randomFlower = flower[Math.floor(Math.random() * flower.length)];
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body: JSON.stringify(randomFlower),
    };
    return response;
};
