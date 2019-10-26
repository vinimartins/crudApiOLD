const jwt = require('jsonwebtoken');
const { secret } = require('../config/default'); //Pega apenas 1 objeto (propriedade)

module.exports = (request, response, next) => {
    const token = request.headers['x-access-token'];

    if (!token) {
        return response
            .status(401)
            .send({
                code:       'not_authorized',
                message:    'Not authorized'
            });
    }

    jwt.verify(token, secret, (error, decoded) => {
        if (error) {
            return response
                .status(500)
                .send({ error });
        }

        console.log(decoded);
        next();
    });    
}