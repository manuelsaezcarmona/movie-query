# Movie Query.馃摻

Peque帽a aplicaci贸n de consulta de peliculas consumiendo la api de [the movie db](https://www.themoviedb.org/)

Puedes verla en accion en https://movies-query.netlify.app/

### Comenzando 馃殌

Para ejecutar esta aplicaci贸n en tu maquina, necesitaras tener instalado Node en tu ordenador.

Puedes descargarla [aqui](https://nodejs.org/en/)

### Instalaci贸n 馃敡

Desde la teminal crea una carpeta y dentro de ella puedes clonar el repositorio

```bash
git clone https://github.com/manuelsaezcarmona/movie-query.git
```

Necesitas realizar la instalaci贸n de las dependencias necesarias ejecuta el comando.

```bash
npm install
```

Cuando termine la instalaci贸n de los paquetes , puedes lanzar el proyecto con .

```bash
npm start
```

Si el script no te lanza una ventana de navegador con la aplicaci贸n. Puedes acceder a traves de la siguiente direcci贸n : [http://localhost:3000](http://localhost:3000)

### Ejecutando las pruebas 鈿欙笍

La aplicaci贸n contiene pruebas automatizadas realizadas bajo el test runner jest y react-testing-library para los test de modulos con React.

Para ejecutar las pruebas, desde el terminal lanza el comando :

```bash
npm test
```

### Tecnolog铆as 馃枼

- React v18
  - React-Router v6 . Para la gesti贸n de rutas
  - React-Redux - Redux-thunk . Para la implementaci贸n del patr贸n redux para la gesti贸n del estado
  - React-icons - Iconos tratados como componentes.
  - Lint - Eslint - Para estilar el c贸digo
  - Prettier - Para formatear el c贸digo segun la guia de estilo
  - [Create React App](https://github.com/facebook/create-react-app). .- Como creador del proyeto y empaquetador.

### Consideraciones en el desarrollo

#### Gesti贸n Global del estado.

Para una aplicaci贸n como la desarrollada usar la libreria Redux y thunk como "middleware" para acciones asincronas, pueder ser "overKill"

El objetivo es implementarla como pr谩ctica para aplicaciones con m谩s escala.
Seguramente con el uso de Contexto seria suficiente.

#### Definici贸n de Datos.

- user.- Aunque no es requerimiento en este estado guardo los favoritos. En caso de escalar puede
  incorporarse mas datos para el usuario. En este caso pongo un usuario de ejemplo dentro del estado inicial de user
- Movies. Estado que guardara las peliculas obtenidas de la API.
  -Active Movie. Pelicula que se est谩 consultando.
- settings.- Elementos de UI necesarios para el comportamiento dinamico. De los componentes

#### Organizaci贸n de componentes.

Al no ser un proyecto grande todos los componentes se encuentran en el folder /components, si la app escalase habria que plantearse otros criterios (features, atomic design etc...)

#### Estilos de aplicaci贸n css.

He usado dos implementaciones:

1.  La carpeta styles recoge todos los estilos que se van a aplicar de manera global a la aplicacion. En el fichero settings.css se encuentra la guia de estilo con la definici贸n de tipologias, colores y layouts globales que permitan una visualizaci贸n homogenea de los elementos y una imagen de marca.

2.  Uso de cssModules, para cada componente se define clases unicas y exclusivas evitando la colision de clases. En estos css modules se aplicaran las variables definidas a nivel global.

#### Uso de constantes

He incorporado el fichero constants.js donde recogo lo que son las variables de entorno.
Normalmente las incorporo en un fichero .env y se recogerian a traves de `process.env.VARNAME`

No es buena pr谩ctica incluir estos ficheros como parte del repositorio y por cuesti贸n de practica lo he incluido en el proyecto.

### Mejoras.

- A nivel funcional
- Incluir usuarios en la app
- Dise帽ar una landing page
- A nivel tecnico
  - Persistencia de datos, bien a traves de front b谩sico con localStorage o IndexDB, o a traves de un back
  - Optimizaci贸n: Refactor de c贸digo en custom hooks y mayor granularizacion de los componentes.
  - Uso intensivo del state: Disminuir las llamadas a la API si los datos ya se encuentran en el store.

### Gesti贸n de versiones GIT | GitHub.

Aparte de usar git para la gestion local de versiones y github para la gestion descentralizada, lo uso como apoyo a una metodolog铆a que suelo usar en los desarrollos. En principio es secuencial pero eso no significa que pasar a la siguiente fase|iteraci贸n|rama sea inamovible y susceptible a cambios que es , lo m谩s habitual.

Cada una de estas ramas pueden tener tareas que pueden ser parte de un backlog / canvas a incorporar durante los sprints, dailys etc..

Las ramas que uso suelen ser:

- **master - main:** unicamente para iniciar el proyecto y para el posterior deploy.
- **structure**: la parte de creaci贸n de estructura para que el resto de la app pueda
  desarrollarse. Esta suele incluir dos subramas

  - _structure-data._ Defino e implemento la estructura de datos, los metodos para obtenerlos y el sistema de gestion de estado si es necesario global o por feature. Redux o Context en funci贸n del tama帽o del proyecto.
  - _structure-route_. Definir las rutas y endpoints de la app y que funcione correctamente el enrutamiento.

- **develop** - Se desarrolla la app.

  - _develop-static_. Se desarrollan los componente sin tener logica en funcion del dise帽o que previamente se ha entregado.
    - Pantallas (Pages)
    - Layouts
    - Containers
    - Components
  - _develop-dynamic_: Programar la logica del negocio.
    - Actions y gestion del etado
    - hooks
    - conditional rendering
    - implementacion de librerias.
  - **testing**: Se encarga de realizar los test unitarios de la aplicaci贸n. Esta rama se puede ir desarrollando en cada una de las ramas anteriores .

  La politica de merge que uso es:
  Se trabaja en una subrama, cuando se termina una feature se mergea con su "rama padre". Por ejemplo. structure-data se mergea con structure.
  De esta manera no se mergea en la rama master|main hasta que no se haya realizado y probado las funcionalidades.

##### Errores en las llamadas API

En las llamadas puede haber dos errores.
1 - En el dominio URL al que se llama.
2 - Alg煤n parametro como una API_KEY incorrecta.

En el primer caso se enviara un error (try / catch), en el segundo caso devolvera un objeto data con informaci贸n sobre el error producido. En el metodo no se hace necesario mas gestion de errores.
