# nodejs-api-server
Simple API server created on nodejs using express which can be easily modified and extended

# run
clone the repository and run following commands on the root directory
```
npm install
npm start
```
after start you will run node server on 3003 port, which can be easily changed from the server.js
# token & request security
Request url - http://localhost:3003/api/v1/{method} <br/>
Token - all request should have Authorization header with value 'Bearer test123456', which can be easily changed from /routes/Routes.js <br />
Request header - use 'Content-Type' header with value 'application/x-www-form-urlencoded'

# possible functions

#### /posts

|name |url| parameters | type | |  
| --- | --- | --- | --- | --- |
|get post |/posts/{id}| | GET |  |
|create post|/posts| `title`, `body`, `userId`| POST | required |
|update post|/posts| `title`, `body`, `userId`| PATCH || 
|delete post|/posts/{id}| | DELETE || 

#### /users

|name |url| parameters | type | |  
| --- | --- | --- | --- | --- |
|get user |/users/{id}| | GET |  |
|create user|/users| `name`, `username`, `email`| POST | required |
|update user|/users| `name`, `username`, `email`| PATCH || 
|delete user|/users/{id}| | DELETE || 

#### /albums

|name |url| parameters | type | |  
| --- | --- | --- | --- | --- |
|get album |/albums/{id}| | GET |  |
|create album|/albums| `title`, `userId`| POST | required |
|update album|/albums| `title`, `userId`| PATCH || 
|delete album|/albums/{id}| | DELETE || 

#### /collection

|name |url| parameters | type |
| --- | --- | --- | --- |
|get all together |/collection| | GET |


### third party API
on the coding process used third party api from [jsonplaceholder.typicode.com](http://jsonplaceholder.typicode.com)