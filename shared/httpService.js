const https = require('https');
const getPostURL = () => {
  return `https://jsonplaceholder.typicode.com/posts`
}

const getUsersURL = () => {
  return `https://jsonplaceholder.typicode.com/users`
}

const getCommentsURL = (postId) => {
  return `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
}

const fetch = (url) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (resp) => {
        let data = ''

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk
        })

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          resolve(JSON.parse(data))
        })
      })
      .on('error', (err) => {
        reject(err)
      })
  })
}

module.exports = {getPostURL,getUsersURL,getCommentsURL,fetch}