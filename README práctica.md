#Comandos útiles de Git

1.- git init (Este inicializa un repositorio nuevo para configurarlo, es decir, al ejecutar este comando, se creará un nuevo subdirectorio .git en mi directorio de trabajo actual)

2.- git add . (Este comando toma todos los archivos y los sube a un stage donde se prepara una foto, definida como Commit)

3.- git reset . (Este comando sirve para revertir el "git add .", por lo que los archivos bajan del stage para poder seguir modificandolos sin guardar cambios)

4.- git commit -m (Este comando sirve para tomar esa "foto", es decir, guardar los cambios pertinentes)

5.- git checkout --. (Este sirve para volver al último "commit" hecho en el proyecto. Asímismo, sirve para recuperar archivos borrados que tengan algún Commit hecho anteriormente)

6.- git log (Con este puedo ver todo el listado de los commits junto con sus ramas pertinentes, por regla general la rama principal es la denominada "master", también considerada como la raíz de la mayoría de ramas)

7.- git commit --amend (Con este se puede arreglar el último commit de la rama seleccionada, es decir, editar el mensaje que se le ha asignado. Si se requiere alguna modificación, se presiona la tecla "i" para realizar un "INSERT" y poder modificar el mensaje) (Si presiono "Q", me salgo del comando sin modificar nada, pero en caso de modificar algo, se presiona "Esc" y se escribe :wq!)

8.- git checkout -b rama-"insertar nombre" (Este comando se usa para poder crear una rama a la que asignaremos un nombre)

9.- git checkout master (Este comando sirve para poder cambiar de rama a la rama master)

10.- git branch -d rama-"insertar nombre" (Este comando sirve para borrar una rama que ya no sea útil)

11.- git push (Este comando sirve para subir los cambios a Github)

12.- git commit -am (Este comando sirve para hacer de manera conjunta los comandos "git add ." y "git commit -m" a un cambio en un archivo al cual git ya le está haciendo seguimiento)

El lenguaje de marcas mas sensillo se conoce como "Mark Dam"