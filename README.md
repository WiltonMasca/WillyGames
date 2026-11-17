# WilyGames — beta para tablets Ceibal

**Versión 14 — 17/11/2026**. Proyecto web del juego WilyGames, con las imágenes integradas en `index.html`.

## Publicarlo en GitHub Pages

1. Crear un repositorio **público** en GitHub con el nombre `WilyGames` (o utilizar uno apropiado previamente creado).
2. En el repositorio, elegir **Add file > Upload files** y subir **los cuatro archivos de esta carpeta**, no el ZIP. Confirmar con **Commit changes**. Deben quedar en la raíz del repositorio.
3. Ir a **Settings > Pages**. En **Build and deployment**, elegir **Deploy from a branch**, rama `main` y carpeta `/(root)`. Guardar.
4. La dirección habitual será: `https://wiltonmasca.github.io/WilyGames/` si el repositorio se llama exactamente `WilyGames` bajo la cuenta `WiltonMasca`.

## Usarlo en las tablets

- La primera vez, abrir la dirección publicada con Internet.
- Dejar que cargue completamente. Volver a abrir la página antes de desconectarse para comprobar que el modo sin conexión quedó preparado.
- Después, abrirla sin Internet para verificar el guardado de perfiles en Chrome. Según la versión de Chrome, se podrá usar **Añadir a la pantalla de inicio**.
- Cada tablet y navegador almacena sus propios perfiles; las partidas **no** se sincronizan entre dispositivos.
- Realizar copias de seguridad de los perfiles desde el propio juego antes de borrar los datos del navegador.

## Archivos

- `index.html`: juego completo (el `WilyGames.html` del ZIP original, renombrado para que GitHub Pages lo abra de inicio).
- `sw.js`: permite guardar una copia de la página en el navegador para uso sin conexión.
- `.nojekyll`: indica a GitHub Pages que no necesita procesar los archivos con Jekyll.
- `README.md`: estas instrucciones.

**Aviso:** la «clave docente» se comprueba con código JavaScript incluido en el juego y no es secreta frente a quien pueda consultar el código fuente. Los perfiles se guardan localmente en el navegador, no en GitHub. Si se modifica el juego y se publica una nueva versión, conviene cambiar también `CACHE_NAME` en `sw.js`.
