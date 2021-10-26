--FIRST SECTION

1. --Primer paso crear la aplicacon npx create-react-app my-app 
2. --Despues instalar las dependencias para trabajar con Tailwindcss
; # npm install tailwindcss -D  //Libreria para diseñar interfaces con javascript
; # npm install postcss-cli -D  //Transfomra codigo CSS con plugins de JavaScript
; # npm install autoprefixer npm-run-all postcss -D

3. --Una vez instalados los paquetes hay que configurar los script en el packageJson del proyecto
4. --Creamos la carpte styles y dentro el archivo style con las configuraciones necesarias; 
    incluiremos tailwind en nuestra archivo CSS from tailwindcss.com/docs/guides/create-react-app
5. --Hay que crear y configurar el archivo postcss.config.js
6. --Despues ejecutamos : # npx tailwindcss-cli@latest init ; esto para crear un config file de tailwindcss
7. --Ejecutamos npm start

--SECOND SECTION

--Crear una carpeta llamada pages ; Dentro de ella Home.JavaScript y dentro de esta la creacion de la pagina con tailwindcss
--Dentro de app.js hay que importar Home.js para poder usarlo, e invocar el componen en el return
--Instalar el paquete de react-router-dom ; # npm install --save react-router-dom ; Nos servira para realizae enrutamiento de pages creadas
 ; Hacer las configuracion de enrutamiento con componentes de react en app.js

 --3th SECTION

 --Creamos varias pages y las configuramos en el appjs
 --Creamos una carpeta components y creamos un componente de tipo nav y lo agregramos al app.js

 4th SECTION
 
 --Habilitar Ruta mediante paso de parametros; uso de params
 --Creacion de un arreglo de objetos ; representaran a articulos y se invocaran en articles 

 5th SECTION
 
 --Crearemos un nuevo archivo ArticlesList.js donde haremos una lista donde al dar click, Nos
 llevara al contenido del articulo seleccionado
 --en el objeto creado anteriormente agregamos una propiedad llamada thumbnail y tendre la ruta de la imagen referenciada


 10th SECTION ; Making article list as reusable component
 





