import * as axios from "axios"
var data = JSON.stringify({
    "collection": "Orders",
    "database": "Stemkits",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-ekngi/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'Wke6VjdjNjTFFe7ZfMnze4WRp1FJs8ru9mDxaVoBP7zRVPTSFdkNvaSM57878kVH',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });