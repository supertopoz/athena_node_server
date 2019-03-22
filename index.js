const express = require('express');
const AthenaExpress = require("athena-express")
const aws = require("aws-sdk")
const app = express()
const port = 3000

aws.config.update({region:'ap-south-1'});
const athenaExpressConfig = { aws };
const athenaExpress = new AthenaExpress(athenaExpressConfig);

app.get('/', (req, res) => {
    getData().then(result=>{
        res.send(result)
    })
});

const getData = () => {
    return new Promise((resolve, reject) => {
        let query = {
            sql: "SELECT * FROM dream11_access_logs LIMIT 1" /* required */,
            db: "sb_logs" /* optional. You could specify a database here or in the advance configuration option mentioned above*/
          };          
          athenaExpress
            .query(query)
            .then(results => {
                console.log(results);
                resolve(results)
            })
            .catch(error => {
                console.log(error);
                reject(results)
            });
    })

}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))