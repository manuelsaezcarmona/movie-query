/* eslint-disable max-len */
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// https://api.themoviedb.org/3
export const API_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '8f781d70654b5a6f2fa69770d1d115a3';
// API KEY mia (por si las moscas) 14d48991374dac0e390f389e4e95197d

export const DEFAULT_LANGUAGE = 'es-ES';
export const DEFAULT_VALUE = 'Avengers';

// Image full Path
export const IMAGE_URL = 'https://image.tmdb.org/t/p';
export const DEFAULT_WIDTH_BACKDROP = 'w300';
export const DEFAULT_WIDTH_POSTER = 'w342';

// ejemplo de ruta de imagen (en este caso con poster_path)
// https://image.tmdb.org/t/p/w500/ugX4WZJO3jEvTOerctAWJLinujo.jpg

// URL de Configuracion te devuelve un objeto de configuracion.
// https://api.themoviedb.org/3/configuration?api_key=8f781d70654b5a6f2fa69770d1d115a3

/**
 * Verás que los objetos película, TV y persona contienen referencias a diferentes rutas de archivos.
 * Para generar una URL de imagen que funcione completamente, necesitarás 3 piezas de datos. Estas
 * piezas son una base_url, un file_size y un file_path.

Las dos primeras piezas se pueden recuperar llamando a la API y
la tercera es la ruta de archivo que se desea obtener en un objeto multimedia concreto.
Esto es lo que parece una URL de imagen completa
 si se devuelve el poster_path de /kqjL17yufvn9OVLyXYpvtyrFfak.jpg para una película, y usted está buscando el tamaño w500:

https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
Los logotipos de empresas y redes están disponibles en dos formatos, SVG y PNG.
Todos los campos logo_path devolverán un .png.
Esto es para mantener la compatibilidad hacia atrás, ya que el soporte SVG fue añadido muy recientemente.
Al mirar los métodos de imagen hay un nuevo campo llamado file_type que le mostrará la versión original del activo que se subió.
En el caso de los SVG, se debe llamar al tamaño original de la imagen, ya que no cambiamos su tamaño.
Si prefieres coger PNG's, puedes llamar al tamaño que desees como es normal.

 "backdrop_path" = imagen de fondo o alargada.
 poster_path = Imagen del Poster.

*/
