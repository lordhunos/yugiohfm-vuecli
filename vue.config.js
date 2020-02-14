const fs = require('fs')

module.exports = {
    devServer: {
        port: '8080',
        https: { 
            key: fs.readFileSync('./certs/localhost-key.pem'),
            cert: fs.readFileSync('./certs/localhost.pem')
        }
    }
}
