# Cifrado César

## Introducción

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

## ¿Cómo usar?

Para mi cifrado, utilicé la siguiente formula:
(x -65 + N) % 26 +65
Donde x es igual al número de la letra en código ASCII. N es mi offset, es 
decir, cuanto es mi desplazamiento. 65 es en el código ASCII de donde parto (A) 
y se lo restamos a "X" para encontrar nuestra posición en el alfabeto que 
nosotros conocemos y el residuo de 26 (%26) es la cantidad de letras de mi 
alfabeto, despúes le sumamos 65, para obtener nuestro código ASCII de una letra.

Por lo tanto, sabiendo esto, lo único que le pediremos al usuario que utilice mi 
app en esta web, es el valor de una "llave" o "N" en mi formula y su mensaje a 
codificar o descifrar. 

Dirigete [AQUÍ](https://ceciliacid.github.io/scl-2018-05-bc-core-pm/src/index.html) para cifrar con código César 
