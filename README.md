# Easy User Authentication for Angular Apps

This repository hosts an Angular project that defines a Single-Page Application (SPA). You'll secure access to some of its routes using Auth0 User Authentication.
The project was done following [this guide](https://auth0.com/blog/complete-guide-to-angular-user-authentication/)

## Get Started

Install the client project dependencies:

```bash
npm install
```

Create in the root of the project an __auth_config.json__ file, with the appropiate values:
```json
{
  "domain": "YOUR_AUTH0_DOMAIN",
  "clientId": "YOUR_AUTH0_CLIENT_ID",
  "audience": "https://api.sample",
  "serverUrl": "http://localhost:8080"
}
```

Run the client project:

```bash
npm start
```

The application runs by on port `4040` to mitigate conflicting with other client applications you may be running.

Visit [`http://localhost:4040/`](http://localhost:4040/) to access the starter application.
