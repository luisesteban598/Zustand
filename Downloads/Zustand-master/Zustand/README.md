ACTIVIDAD DE APRENDIZAJE

Preguntas de reflexión Inicial

Responde o en el README del proyecto:

1. ¿Por qué Encabezado se actualiza cuando agregas un producto, si no recibe ninguna prop?
2. ¿Qué tendrías que hacer para lograr lo mismo usando solo useState en App?
3. ¿Para qué sirve el selector (state) => state.items al usar el hook?
4. ¿Por qué en el store se crean arreglos nuevos con map y filter en lugar de modificar items
directamente?
5. ¿Zustand es parte de React? Explica la diferencia entre una librería propia de React y una del
ecosistema.

Respuestas:

1. ¿Por qué Encabezado se actualiza cuando agregas un producto, si no recibe ninguna prop?**  
Encabezado se actualiza porque está conectado al store de Zustand y puede leer directamente el estado global. Cuando agregamos un producto, el estado cambia y Zustand hace que los componentes que usan esa información se vuelvan a renderizar.

2. ¿Qué tendrías que hacer para lograr lo mismo usando solo `useState` en App?**  
Tendría que guardar los productos en un `useState` dentro de App y después pasar esa información por medio de props a los componentes que la necesiten. Si hay muchos componentes, esto puede ser más complicado porque tendría que pasar las props entre varios componentes.

3. ¿Para qué sirve el selector `(state) => state.items` al usar el hook?**  
Sirve para decirle al hook que solamente quiero obtener la parte `items` del estado global. Así el componente trabaja únicamente con la información que necesita, en lugar de obtener todo el estado del store.

4. ¿Por qué en el store se crean arreglos nuevos con `map` y `filter` en lugar de modificar `items` directamente?**  
Porque en React y en librerías como Zustand es importante no modificar directamente el estado original. `map` y `filter` permiten crear un nuevo arreglo con los cambios. Esto hace que el cambio de estado sea más fácil de detectar y ayuda a evitar errores inesperados.

5. ¿Zustand es parte de React? Explica la diferencia entre una librería propia de React y una del ecosistema.**  
No, Zustand no hace parte de React. React tiene herramientas propias como `useState` y `useEffect`. En cambio, Zustand es una librería externa que pertenece al ecosistema de React y se puede instalar para manejar estados globales. La diferencia es que una librería propia viene incluida o está desarrollada como parte de React, mientras que una del ecosistema es creada por otros desarrolladores y se puede usar junto con React.