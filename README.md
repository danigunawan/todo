# TODO App on Rails with React and React Native

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## 1. Description

Two apps:

- TODO Web App — Rails web app with React frontend
- TODO Mobile App - React Native app with Rails backend

## 2. Dependencies

- Ruby 2.5.0
- Rails 5.2.0
- Webpacker: 3.5.3
- React: 16.3
- React Native: 0.55

## 3. TODO Web App

### 3.1. Directory structure

```
frontend
|-todo
| |-index.jsx
| |-App.jsx
| |
| |-components
| | |-AppHeader.jsx
| | |-AppLayout.jsx
| | |-TodoAdd.jsx
| | |-TodoItem.jsx
| | |-TodoList.jsx
| |
| |-store
| | |-index.js
| | |-constants.js
| | |-types.js
| | |-helper.js
| | |
| | |-todo
| | | |-index.js
| | | |-schema.js
| | |-filter
| | | |-index.js
```

### 3.2. Components

There are no separate directories for Presentational (Dumb) Components and Container (Smart) Components. All Components stored in `components` directory.

### 3.3. Store

Trying to make store as simple and clear as possible I place each module in separate directory.
In this case `todo` module and `filter` module.

In each module's `index.js` file there is:

- initial state
- action creators
- reducers
- asycn actions (launched by `redux-thunk` middleware)

All global `constants` and action `types` stored in root `store` directory.

### 3.3.1 Module description

```js
export default {
  actions,
  reducers
}
```

#### 3.3.2. Action creators boilerplate

```js
const actions = {
  [types.module.ACTION_TYPE]: payload => ({ type: types.module.ACTION_TYPE, payload }),

  [types.module.OTHER_ACTION_TYPE]: payload => ({ type: types.module.OTHER_ACTION_TYPE, payload })
  
}
```

#### 3.3.3. Reducer boilerplate

```js
const reducers = helper.createReducer(initialState, {
  [types.module.ACTION_TYPE]: (state, action) => action.payload,

  [types.module.OTHER_ACTION_TYPE]: (state, action) => {
    return { ...state, action.newState }
  }
```

No `switch` and `case` statements.
This functionality is implemented by `createReducer` helper:

```js
createReducer (initialState, handlers) {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
```

#### 3.3.4. Async actions boilerplate

```js
const actions = {
  [types.module.ASYNC_ACTION_TYPE]: (payload) => {
    return async (dispatch) => {
      await someAsyncAction(payload)
    }
  }
}
```

### 3.4. Run

```sh
$ rails s
$ ./bin/webpack-dev-server
$ open http://localhost:3000
```

## 4. TODO Mobile App

Created using CRNA — Create React Native App.

### 4.1. Directory structure

```
frontend
|-todo-native
| |-App.js
| |-crna-entry.js
| |
| |-components
| | |-AppBreadcrumbs.js
| | |-AppHeader.js
| | |-AppLayout.js
| | |-AppNavigation.js
| | |-TodoAdd.js
| | |-TodoItem.js
| | |-TodoList.js
```

Utilizes store from `frontend/todo/store`.

### 4.2. Run

```sh
$ rails s -p 3000
$ ngrok http 3000
```

Then copy ngrok https url to `AppLayout.js`, `TodoAdd.js` and `TodoItem.js`

```sh
$ yarn start
```

Then you can launch app in Expo (available on iOS and Android). No need to install XCode or Android Studio.

## 5. Babel and Style Guide setup

`.babelrc`:

```json
{
  "presets": ["babel-preset-expo"],
  "env": {
    "development": {
      "plugins": ["transform-react-jsx-source"]
    }
  }
}
```

`frontend/todo/.babelrc`:

```json
{
  "presets": ["react-app"]
}
```

`.eslintrc.yml`:

```jaml
parser: babel-eslint
extends:
  - standard
  - standard-react
```

In order to use `transform-class-properties` from JavaScript Stage 1 I had to use `babel-eslint` parser. This allows me to use experimental public class fields syntax and not to bind `this` for every event handler in the constructor:

```js
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

[Identify unauthorized users](https://stackoverflow.com/questions/216542/how-do-i-uniquely-identify-computers-visiting-my-web-site)
