const UsersModel = require('../models/Users');

const userModel = new UsersModel();

class Users {
    static get(request, response) {
        const id = request.params.id;
            
        userModel.get(id)
            .then(user => {
                if (user.exists) {
                    response.json(user.data());
                } else {
                    response.sendStatus(404);
                    console.log('nao encontrado');
                }
            })
            .catch(err => {
                //response.sendStatus(503);
                console.log('Error getting document', err);
            });
    } 

    static list(request, response) {
        userModel.list()
            .then(users => response.json(
                users.docs.map(user => (
                    {
                        ...user.data(), 
                        id: user.id
                    }
                ))
            ))
            .catch(err => {
                response.
                    sendStatus(500);
                console.log('Error getting document', err);
            });
    }
}


module.exports = Users;