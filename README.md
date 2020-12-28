This project was deployed [link of deploy](https://cart-reactjs.netlify.app/).

## Available Scripts

In the project directory, you can run:

```JSON
[  
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --verbose",
    "test:ci": "cross-env CI=true react-scripts test ",
    "test:ci:alt": "react-scripts test --ci --watchAll=false",
    "test:jsdom": "yarn test --env=jsdom",
    "test:staged": "cross-env CI=true react-scripts test --findRelatedTests",
    "test:coverage": "yarn test:ci --coverage",
    "eject": "react-scripts eject"
  }
]
```
