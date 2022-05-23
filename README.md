# Movie Query.

# Gestion de versiones GIT | GitHub.

Uso git para la gestion local de versiones y github para la gestion descentralizada

Las ramas que uso suelen ser:

- master - main: unicamente para iniciar el proyecto y para el posterior deploy.
- structure: la parte de creacion de estructura para que el resto de la app pueda
  desarrollarse. Esta suele incluir dos subramas
  - structure-data. Defino e implemento la estructura de datos, los metodos para obtenerlos y el sistema de gestion de estado si es necesario global o por feature. Redux o Context en función del tamaño del proyecto.
  - structure-route. Definir las rutas y endpoints de la app y que funcione correctamente el enrutamiento.
- develop - Se desarrolla la app.

  - develop-static. Se desarrollan los componente sin tener logica en funcion del diseño que previamente se ha entregado.
    - Pantallas (Pages)
    - Layouts
    - Containers
    - Components
  - develop-dynamic: Programar la logica del negocio.
    - Actions y gestion del etado
    - hooks
    - conditional rendering
    - implementacion de librerias.
  - testing: Se encarga de realizar los test unitarios de la aplicacion. Esta rama se puede ir desarrollando en cada una de las ramas anteriores .

  La politica de merge que uso es:
  Se trabaja en una subrama, cuando se termina una feature se mergea con su "rama padre". Por ejemplo. structure-data se mergea con structure.
  De esta manera no se mergea en la rama master|main hasta que no se haya realizado y probado las funcionalidades.

## Errores en las llamadas API

En las llamadas puede haber dos errores.
1 - En el dominio URL al que se llama.
2 - Algun parametro como una API_KEY incorrecta.

En el primer caso se enviara un error (try / catch), en el segundo caso devolvera un objeto data con información sobre el error producido. En el metodo no se hace necesario mas gestion de errores.

# Gestion Global del estado.

Para una prueba usar la libreria Redux y thunk como "middleware" para acciones asincronas, pueder ser "overKill" pero la idea es ponerla en practica para aplicaciones con más escala.
Seguramente con el uso de Contexto seria suficiente.

## Definicion de Datos.

- user.- Aunque no es requerimiento en este estado guardo los favoritos. En caso de escalar puede
  incorporarse mas datos para el usuario. En este caso pongo un usuario de ejemplo dentro del estado inicial de user
- Movies. Estado que guardara las peliculas obtenidas de la API.
  -Active Movie. Pelicula que se está consultando.

## Helpers

geturlImages: Devuelve la URL absoluta para incorporar su imagen a los componentes

## Organizacion de componentes.

Al no ser un proyecto grande todos los componentes se encuentran en el folder /components, si la app escalase habria que plantearse otros criterios (features, atomic design etc...)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
