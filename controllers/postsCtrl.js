const { setDataFromFile, getDataFromFile } = require("../shared/fileService");
const { getPostURL, fetch } = require("../shared/httpService");

class postsCtrl {

    async storePosts(){
        try{
            const posts = await this.getPosts();
            setDataFromFile('posts',JSON.stringify(posts));
        } catch(error){
            console.log(error);
        }
    }

    async getPostsByPage(page) {
        try {
            const posts = await getDataFromFile('posts');
            const i = page*(posts.length/10)
            return (JSON.parse(posts)).slice(0,10)
        } catch(error){
            console.log(error);
        }
    }

    async getPosts(){
        return new Promise((resolve, reject) => {
            fetch(getPostURL())
              .then((jsonRespone) => resolve(jsonRespone))
              .catch((e) => reject(e.message));
            });
    }
}

module.exports = new postsCtrl();