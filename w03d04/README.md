# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [ ] Method Override [Stretch]

username=alice&password=1234

### Hashing
* one way process
* cannot be undone
* plaintext password => hashing algorithm => hash 60 character string
* login password => hash it the same way the original password was hashed => same hash
* salts are added to the original password before hashing
'hello' + 'asdhfkashdfkhaskdf' => hash


### Encryption
* two-way process (can be undone)
* secret key => lock and unlock the cookie value

fasdlkfhaskldhflKasmfasd

http://localhost:8002/protected

<!-- Man in the Middle -->
Monster in the Middle

https
all communication is encrypted

https://www.google.com/

* asymmetric cryptography
* public key => browser uses the public key to encrypt the data
* private key => decrypt the data

* hashed passwords
* encrypted cookies
* https

### REST
* naming convention for routes
* REpresentational State Transfer
* RESTful 

GET /all-the-users
POST /create-new-user

DELETE => deletes a resource
PUT => completely replace a resource
PATCH => replace a piece of a resource

Browse  GET   /maps
Read    GET   /maps/:id
Edit    POST  /maps/:id
Add     POST  /maps
Delete  POST  /maps/:id/delete

Browse  GET     /maps
Read    GET     /maps/:id
Edit    PATCH   /maps/:id
Add     POST    /maps
Delete  DELETE  /maps/:id











