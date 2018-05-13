# Rails with React

## Description

Rails with React boilerplate.

## Dependencies

- Ruby 2.5.0
- Rails 5.2.0
- Webpacker: 3.5.3
- React: 16.3.2

## History

`$ rails new todo --webpack=react`

`$ mv app/javascript frontend`

File `config/webpacker.yaml` :

```yaml
default: &default
  source_path: frontend

```

`$ eslint --init`

- Use a popular style guide
- Standard
- YAML

`$ yarn add -D eslint-plugin-react`

File `.eslint.yml` :

```yaml
extends:
  - standard
  - 'plugin:react/recommended'
plugins:
  - react
```

`$ yarn add prop-types`

File `app/controllers/application_controller.rb` :

```ruby
class ApplicationController < ActionController::Base
  def index
  end
end
```

File `config/routes.rb` :

```ruby
Rails.application.routes.draw do
  root 'application#index'
end
```

File `app/views/layouts/application.html.erb` :

```erb
<!DOCTYPE html>
<html>
  <head>
    <title>Todo</title>
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>

    <%= javascript_pack_tag 'application' %>
  </head>

  <body>
    <%= yield %>
  </body>
</html>
```

File `app/views/application/index.html.erb` :

```html
<div id="app"/>
```

File `frontend/packs/application.js` :

```js
import 'todo'
```

File `frontend/todo/index.jsx` :

```jsx
import React from 'react'
import { render } from 'react-dom'
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.getElementById('app')
  )
})
```

File `frontend/todo/App.jsx` :

```jsx
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
  render () {
    return (
      <div>Hello {this.props.name}!</div>
    )
  }
}

App.defaultProps = {
  name: 'Matz'
}

App.propTypes = {
  name: PropTypes.string
}
```

`$ rails s`
