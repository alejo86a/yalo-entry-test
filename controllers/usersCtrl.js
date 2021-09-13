const { getUsersURL, fetch } = require("../shared/httpService");
const { setDataFromFile, getDataFromFile } = require("../shared/fileService");
class usersCtrl {

    async storeUsers() {
        try{
            const users = await this.getUsers();
            setDataFromFile('users',JSON.stringify(users));
        } catch(error){
            console.log(error);
        }
    }

    async getUserById(userId) {
        try {
            const users = await getDataFromFile('users');
            const user = (JSON.parse(users)).find(u=>u.id===userId)
            console.log('a', user)
            return user;
        } catch(error){
            console.log(error);
        }
    }

    async getUsers(){
        return new Promise((resolve, reject) => {
            fetch(getUsersURL())
              .then((jsonRespone) => resolve(jsonRespone))
              .catch((e) => reject(e.message));
            });
    }
}

module.exports = new usersCtrl();