# CampusConnect API Specification

## 1. Overview

CampusConnect uses a REST API to connect the React login page to the Express backend.

The base URL for local development is:

`http://localhost:3000/api/v1`

The API uses JSON for requests and responses.

## 2. API Endpoints

### GET /api/v1/health

**Purpose:** Checks whether the backend server is running.

**Successful Response (200 OK):**

```json
{
  "status": "ok"
}
```

### POST /api/v1/sessions

**Purpose:** Allows a user to log in using an email and password.

**Request Body:**

```json
{
  "email": "student@campusconnect.test",
  "password": "Campus26"
}
```

**Successful Response (200 OK):**

```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "id": 1,
    "name": "Demo Student",
    "email": "student@campusconnect.test"
  }
}
```

**Error Responses:**

| Status | Meaning | Response |
|---|---|---|
| 400 | Missing or invalid fields | `{"error":"Email and password are required."}` |
| 401 | Wrong password or unknown email | `{"error":"Invalid email or password."}` |

### GET /api/v1/users/me

**Purpose:** Returns the logged-in user's information.

**Required Header:**

`Authorization: Bearer <JWT_TOKEN>`

**Successful Response (200 OK):**

```json
{
  "id": 1,
  "name": "Demo Student",
  "email": "student@campusconnect.test"
}
```

**Error Response (401 Unauthorized):**

```json
{
  "error": "Not logged in."
}
```

## 3. General Error Responses

**404 Not Found**

```json
{
  "error": "Not found."
}
```

**500 Internal Server Error**

```json
{
  "error": "Something went wrong."
}
```

## 4. Events Resource (Design Only)

The Events resource is planned for future development. These endpoints are documented but are not required to be implemented in this activity.

| Method | Endpoint | Purpose |
git status|---|---|---|
| GET | `/api/v1/events` | Retrieve all events |
| GET | `/api/v1/events/:id` | Retrieve a specific event |
| POST | `/api/v1/events` | Create an event |
| PATCH | `/api/v1/events/:id` | Update an event |
| DELETE | `/api/v1/events/:id` | Delete an event |
| GET | `/api/v1/events?month=11` | Filter events by month |

### Example Event Object

```json
{
  "id": 1,
  "title": "Campus Orientation",
  "date": "2026-11-15",
  "location": "University Auditorium"
}
```

### Example: Create Event

**POST /api/v1/events**

Request:

```json
{
  "title": "Campus Orientation",
  "date": "2026-11-15",
  "location": "University Auditorium"
}
```

Proposed successful response (201 Created):

```json
{
  "id": 1,
  "title": "Campus Orientation",
  "date": "2026-11-15",
  "location": "University Auditorium"
}
```

## 5. Authentication and Security

- Passwords are stored as hashes using bcryptjs.
- Successful login returns a JWT token that expires after one hour.
- Protected endpoints require a valid Bearer token.
- Passwords and password hashes are never included in API responses.
- Environment secrets are stored in `.env`, which is excluded from Git.
- `.env.example` provides the required environment variable names without storing real secrets.

## 6. Testing

The API is tested using curl and Postman.

The required tests include successful login, invalid login, missing fields, health checks, and protected-route access with and without authentication.

The Postman collection is saved at:

`docs/postman/CampusConnect.postman_collection.json`
