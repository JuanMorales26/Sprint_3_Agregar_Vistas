const User = require('../../../Twitter/app/models/User')

class UserView{
    static createUser(payload){
        /*Requerimiento 1*/
        if(payload == null){
            const result = {
                error: "payload no existe"
            }
            return result;
        }
        /*Requerimiento 4*/    
        if(payload.id != null && payload.user != null && payload.name != null){
            const user = new User(payload.id, payload.user, payload.name, payload.bio);
            return user
        }
        else{ /*Requerimiento 2 y 3 */       
            if(payload.id == null || payload.user == null || payload.name == null || payload.bio == null || payload.dataCreated == null || payload.lastUpdated == null || payload.id == undefined || payload.user == undefined || payload.name == undefined || payload.bio == undefined || payload.dataCreated == undefined || payload.lastUpdated == undefined){
                const result = {
                    error: "necesitas tener un valor valido"
                }
                return result;
            }
        }
    }
}
module.exports = UserView