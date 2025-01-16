# to-do-app

# To-Do List Application

## Overview
A simple To-Do List app using microservices architecture:
- **Frontend:** HTML, CSS, JavaScript (served by Nginx).
- **Backend:** Node.js/Express API.
- **Database:** MySQL for storing tasks.

## Prerequisites
- Docker and Docker Compose installed.

## Setup and Deployment
1. Clone this repository.
2. Navigate to the project directory.
3. Run `docker-compose up` to start the services.

## Access
- Frontend: `http://localhost:8080`
- Backend API: `http://localhost:5000`
- MySQL Database: Port `3306`

## Notes
- Frontend communicates with backend via REST API.
- Backend interacts with MySQL database.
- Ensure ports 8080, 5000, and 3306 are available on your machine.
