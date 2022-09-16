# React Use Context
- React context provides data to components no matter how deep in the component tree.
- Context is used to manage global data (state, theme, settings, etc.)

## How to use the context (3 steps)
- Create the context
- Provide the context
- Consume the context

### Step 1 (Create Context)
```
// The built-in factory function createContext(default) creates a context instance:

import { createContext } from 'react';
const Context = createContext('Default Value');

// The factory function accepts one optional argument: the default value.
```

### Step 2 (Provide Context)
```
// Context.Provider component available on the context instance is used to provide the context to its child components, no matter how deep they are.

// To set the value of context use the value prop available on the <Context.Provider value={value} />:

function Main() {
  const value = 'My Context Value';
  return (
    <Context.Provider value={value}>
      <MyComponent />
    </Context.Provider>
  );
}

// Again, what's important here is that all the components that'd like later to consume the context have to be wrapped inside the provider component.
```

### Step 3 (Consume Context)
```
import { useContext } from 'react';

function MyComponent() {
  const value = useContext(Context);
  return <span>{value}</span>;
}
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
