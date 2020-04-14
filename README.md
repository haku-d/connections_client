# connections_client

A basic front-end integrating with existing APIs including basic features such as listing of connection and updating connection type.

**Libraries**

- Vuex: state management
- Axios: http communication
- Vuetify: UI framework

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

#### Env Variables

- Create a new file named `.env.local` from project root folder with content:

```
VUE_APP_BASE_URL=http://localhost:5000
```

> Change value of `VUE_APP_BASE_URL` variable to the backend api
