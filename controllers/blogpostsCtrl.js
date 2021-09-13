const postsCtrl = require("./postsCtrl");
const usersCtrl = require("./usersCtrl");

class blogspostsCtrl {

    async getBlogsPosts(req, res, next){
        const {page} = req.query;
        //TODO find post in post controller
        const posts = await postsCtrl.getPostsByPage(page);
        // const postTransformed = await 
        // console.log('p', postTransformed)
        Promise.resolve(posts.map(async p=>{
            p.user = (await usersCtrl.getUserById(p.userId));
            return p;
        })).then(data => {
            res.status(200).json(data).end();
        })

        //TODO find user in user controller
        //fetch comments from API
        //transform the data
        //response the data
        // res.status(200).json(postTransformed).end();
    }
}

module.exports = new blogspostsCtrl();