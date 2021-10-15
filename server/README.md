# Basic Documentation For This Api

## Setup

After cloning this repository, you can run

```
cd server
yarn dev
```

to start the server on localhost:5000.
**Note** you need to have a sample database created in order for this to work

## Routes

Currently, there is only one route: /users.

| Method | Route         | Options          | Response                                                                 |
| ------ | ------------- | ---------------- | ------------------------------------------------------------------------ |
| GET    | /users/:id    | None             | Returns a user with a specific id.                                       |
| GET    | /users        | None             | Returns all users.                                                       |
| POST   | /users/create | {name, password} | Creates a user and inserts that user into the database                   |
| POST   | /users/login  | {name, password} | Tries to sign a user in. Authentication erros are processed and returned |

**NOTE** There is one more route (/delete/:id); this route is not safe for production use yet.
