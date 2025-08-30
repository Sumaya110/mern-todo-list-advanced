# used packages

### express.json()

- Its job is to parse incoming requests with JSON payloads (i.e., when the request body is in JSON format).

### register a user
```
Method: POST
http://localhost:4000/api/user/signup

req.body :
{
    "email": "sumaya4@gmail.com",
    "password": "@Pass1234"
}
```


### login a user
```
Method: POST 
http://localhost:4000/api/user/login

req.body :
{
    "email": "sumaya4@gmail.com",
    "password": "@Pass1234"
}
```

### get tasks
```
Method: GET
http://localhost:4000/api/task

req.headers.Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGIzMTU4MjAxYTg3NWVkM2E0OGVjYzYiLCJpYXQiOjE3NTY1NjY5MjYsImV4cCI6MTc1NzM0NDUyNn0.wXzy0a5xcJkmfvFE92QG7oRK3l0vfkIRBZmEQCmLHaQ

```


### create task
```
Method: POST
http://localhost:4000/api/task

req.headers.Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGIzMTU4MjAxYTg3NWVkM2E0OGVjYzYiLCJpYXQiOjE3NTY1NjY5MjYsImV4cCI6MTc1NzM0NDUyNn0.wXzy0a5xcJkmfvFE92QG7oRK3l0vfkIRBZmEQCmLHaQ

req.body 
{
    "title": "reading books",
    "description": "Complete first 3 chapter of the histry book",
    "status": "todo"
}
```

### delete task
```
Method: DELETE
http://localhost:4000/api/task/68b3399d2a1a2779cc4ef5f1

req.headers.Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGIzMTU4MjAxYTg3NWVkM2E0OGVjYzYiLCJpYXQiOjE3NTY1NjY5MjYsImV4cCI6MTc1NzM0NDUyNn0.wXzy0a5xcJkmfvFE92QG7oRK3l0vfkIRBZmEQCmLHaQ

```

### update task
```
Method: PATCH 
http://localhost:4000/api/task/68b3399b2a1a2779cc4ef5ed

req.headers.Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGIzMTU4MjAxYTg3NWVkM2E0OGVjYzYiLCJpYXQiOjE3NTY1NjY5MjYsImV4cCI6MTc1NzM0NDUyNn0.wXzy0a5xcJkmfvFE92QG7oRK3l0vfkIRBZmEQCmLHaQ

{
    "title": "playing",
    "status": "In progress"
}
```