# Folder Structure

- domain/      -> Core business entities and rules (no framework code)
- application/ -> Use cases / business logic that coordinate the domain
- infra/       -> External concerns: database, third-party services, config
- routes/      -> HTTP layer: defines API endpoints and maps them to use cases

# Run

npm install
node server.js

# Test

http://localhost:3000/ping  ->  {"message":"pong"}
