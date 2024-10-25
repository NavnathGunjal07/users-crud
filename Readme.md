    # User Management API

    This project is a RESTful API built with **Node.js**, **Express**, **TypeScript**, and **MongoDB** (Atlas or local) for performing CRUD operations on user data. It follows best practices such as input validation, error handling, and environment-based configuration.

    ## Features
    - Create, Read, Update, and Delete (CRUD) operations for users.
    - Supports connection to MongoDB Atlas or local MongoDB.
    - Input validation using **Joi** schema.
    - Comprehensive error handling for common issues.
    - Production-ready with build configurations.

    ## Prerequisites
    - **Node.js** and **npm** installed. [Download Node.js](https://nodejs.org/).
    - **MongoDB Atlas** account or **MongoDB** installed locally. [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/).
    - Create a `.env` file at the project root with the following variables:

    ```bash
    MONGODB_URI=<your-mongodb-uri>
    PORT=3000


# User Management API

This project is a RESTful API built with **Node.js**, **Express**, **TypeScript**, and **MongoDB** (Atlas or local) for performing CRUD operations on user data. It follows best practices such as input validation, error handling, and environment-based configuration.

## Features
- Create, Read, Update, and Delete (CRUD) operations for users.
- Supports connection to MongoDB Atlas or local MongoDB.
- Input validation using **Joi** schema.
- Comprehensive error handling for common issues.
- Production-ready with build configurations.

## Prerequisites
- **Node.js** and **npm** installed. [Download Node.js](https://nodejs.org/).
- **MongoDB Atlas** account or **MongoDB** installed locally. [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/).
- Create a `.env` file at the project root with the following variables:

```bash
MONGODB_URI=<your-mongodb-uri>
PORT=3000
```

### 1. Get All Users
- **Method**: `GET`
- **Endpoint**: `/api/users/`
- **Description**: Retrieves a list of all users from the database.
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    [
      {
        "_id": "60f7b9f8f3b5b341cc9a2a76",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "createdAt": "2024-10-01T08:30:00.000Z",
        "updatedAt": "2024-10-01T08:30:00.000Z"
      }
    ]
    ```
- **Error Responses**:
  - **Code**: `500 Internal Server Error`
  - **Description**: If something goes wrong on the server.

---

### 2. Get User by ID
- **Method**: `GET`
- **Endpoint**: `/api/users/:id`
- **Description**: Fetches a single user by their unique ID.
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "_id": "60f7b9f8f3b5b341cc9a2a76",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "createdAt": "2024-10-01T08:30:00.000Z",
      "updatedAt": "2024-10-01T08:30:00.000Z"
    }
    ```
- **Error Responses**:
  - **Code**: `404 Not Found`
  - **Description**: If the user is not found.
  - **Code**: `500 Internal Server Error`
  - **Description**: If something goes wrong on the server.

---

### 3. Create a User
- **Method**: `POST`
- **Endpoint**: `/api/users/createUser`
- **Description**: Creates a new user.
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
  }

### 4. Update User by ID
- **Method**: `PUT`
- **Endpoint**: `/api/users/:id`
- **Description**: Updates an existing user's information by their unique ID.
- **Body**:
  ```json
  {
    "name": "John Doe Updated",
    "email": "johnupdated@example.com"
  }

### Delete User by ID
- **Method**: `DELETE`
- **Endpoint**: `/api/users/:id`
- **Description**: Deletes an existing user by their unique ID.
- **Success Response**:
  - **Code**: `204 No Content`
  - **Description**: User successfully deleted.
- **Error Responses**:
  - **Code**: `404 Not Found`
  - **Description**: If the user is not found.
  - **Code**: `500 Internal Server Error`
  - **Description**: If something goes wrong on the server.



