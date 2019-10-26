const userModel = require('./userModel');

class Users{
    static get(request,response){
        
        const id = request.params.id
        const key = `user_${id}`
        
        memoryCache.get(key, (err,result)=>{
            if(result){
                console.log('err', err)
                console.log('result', result)
            }
            
            
            usersModel.get(id)
            .then(user => {          
                if(!user.exists){
                    response
                    .sendStatus(404)
                }
                
                const userData = user.data()
                
                memoryCache.set(key,userData)
                response.json(userData)
            })
            .catch(err=>{
                response
                .sendStatus(500)
                console.log('error getting document',err)
            })
        })
    }
}

module.exports = Users;