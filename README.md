# todos-with-react-redux

![](https://github.com/gowda/todos-with-react-redux/workflows/eslint/badge.svg)
![](https://github.com/gowda/todos-with-react-redux/workflows/cypress/badge.svg)

[TodoMVC](http://todomvc.com/) implementation using react-redux

## Usage

#### Clone the repository

```bash
$ git clone git@github.com:gowda/todos-with-react-redux.git
$ cd todos-with-react-redux
```

#### Install dependencies

```bash
$ npm install
```

#### Run development server

```
$ npm run server
```

Development server listens at [http://localhost:3000](http://localhost:3000).
Can be changed by updating [webpack.development.ts](webpack.development.ts#L12).

#### Run linter

```bash
$ npm run lint
```

[ESLint](https://eslint.org/) is configured to extend from
[eslint-config-airbnb-typescript](https://github.com/airbnb/javascript)

Configuratin is in [.eslintrc.js](.eslintrc.js)

#### Run integration tests

```bash
$ npm run features
```

## License

> "THE BEER-WARE LICENSE" (Revision 42):
> [Gowda](https://github.com/gowda) wrote this file. As long as you retain
> this notice you can do whatever you want with this stuff. If we meet
> some day, and you think this stuff is worth it, you can buy me a beer in return.
