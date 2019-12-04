# SourceSage ReactJS Frontend Technical Testing

## Overview

The application is a single page application build together of several modules.

This app is served to the client by web application on port 8080 default.

## System requirements

To build and develop, you need to have [NodeJS](http://nodejs.org/)

## Folder structure

```
sourcesage_reactjs_frontend/
├── LICENSE
├── package.json
├── README.md
├── src
│   ├── _actions
│   │   ├── alert.actions.js
│   │   ├── index.js
│   │   └── user.actions.js
│   ├── App
│   │   ├── App.jsx
│   │   └── index.js
│   ├── _components
│   │   ├── index.js
│   │   └── PrivateRoute.jsx
│   ├── _constants
│   │   ├── alert.constants.js
│   │   ├── index.js
│   │   └── user.constants.js
│   ├── _helpers
│   │   ├── auth-header.js
│   │   ├── fake-backend.js
│   │   ├── history.js
│   │   ├── index.js
│   │   └── store.js
│   ├── HomePage
│   │   ├── HomePage.jsx
│   │   └── index.js
│   ├── index.html
│   ├── index.jsx
│   ├── LoginPage
│   │   ├── index.js
│   │   └── LoginPage.jsx
│   ├── _reducers
│   │   ├── alert.reducer.js
│   │   ├── authentication.reducer.js
│   │   ├── index.js
│   │   ├── registration.reducer.js
│   │   └── users.reducer.js
│   ├── RegisterPage
│   │   ├── index.js
│   │   └── RegisterPage.jsx
│   └── _services
│       ├── index.js
│       └── user.service.js
└── webpack.config.js
```
