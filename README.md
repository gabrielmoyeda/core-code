

## Week challenges (Tuesday)  💻

1.  Watch  [this](https://www.youtube.com/watch?v=JNMy969SjyU)  video about compilation and interpretation 
* Diferencias entre compilación e interpretación
* **Compilación:** convierte mi código a lenguaje binario para que pueda ser ejecutado.
* 
|Pros|Contras  |
|--|--|
|Más rápido|No es multiplataforma  |
|Código fuente es privado|requiere de pasos extra para compilar  |
* **Intérprete:** se envía directamente mi código y el intérprete lo interpreta al vuelo, es decir, haciendo la ejecución línea por línea.
*
|Pros|Contras  |
|--|--|
|multiplataforma|mas lento|
|no requiere de pasos extras|el código es público  |
|facilita la depuracion||
2.  Search and answer the question: Java language is compiled or interpreted?
Java se puede considerar tanto un lenguaje compilado como interpretado porque su código fuente se compila primero en un código de bytes binario. Este código de bytes se ejecuta en la máquina virtual de Java (JVM), que suele ser un intérprete basado en software. El uso de código de bytes compilado permite que el intérprete (la máquina virtual) sea pequeño y eficiente (y casi tan rápido como la CPU que ejecuta código compilado nativo). Además, este código de bytes le da a Java su portabilidad: se ejecutará en cualquier JVM que se implemente correctamente, independientemente de la configuración del hardware o software de la computadora. La mayoría de los navegadores web (como Microsoft Internet Explorer o Netscape Communicator) contienen una JVM para ejecutar applets de Java.
3.  Create an algorithm to calculate the equivalent of your local currencty to USD
	1. Solicitar Monto a convertir
	2. Resultado = Monto * 20
	3. Muestra el Resultado
4.  Read about Pseudocode  [here](https://www.freecodecamp.org/news/what-is-pseudocode-in-programming/), you can also find some examples  [here](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/resources/PSEUDOCODE.md)
5.  Anwser to the question: Why is pseudocode helpful?
Por que es algo que escribiste tu, puedes crear tus propias reglas, es un método informal de diseño de programas, así que finalmente una vez que tienes resuelto el problema, solo es cuestión de pasarlo al lenguaje deseado.
6.  Create a pseudocode to calculate the aproximated age of a user base on the year they born, (you can define a variable with the actual year if you need it, like for example i could define Y <-- 2022)
	Calcula Edad
	Variables: Y = 2022, Num1, Resultado
	Escribir "Ingrese el año de nacimiento"
	Leer Num1
	Resultado = Y - Num1
	Escribir "Tu edad es:" *Resultado*
	
	
7.  Read about flowcharts  [here](https://www.lucidchart.com/pages/es/que-es-un-diagrama-de-flujo)
8.  Answer to the question: Why are flowcharts important to us as developers?
Un diagrama de flujo sirve para describir un proceso o un sistema sirve para documentar, estudiar, mejorar, entender procesos que pueden ser complejos de forma visual, es decir, diagramas claros y fáciles de comprender.
9.  Search about High-level languages and Low-level languages, you can start with  [this](https://www.youtube.com/watch?v=1vRPOp5p-qs)  video
Lenguajes de Alto Nivel: es fácil de leer por el ser humano 
Lenguaje de Bajo Nivel: Es fácil de leer por el computador, pero no lo es tanto para el ser humano
##
## Week challenges (Wednesday)  💻
1.  Learn about binary, decimal and hexadecimal numbers
2.  Translate the year you where born to binary, decimal and hexadecimal
**Bin:** 11110111001
**Dec:** 1977
**Hex** 7B9
3.  Translate 51966 into hexadecimal and binary
**Bin:** 1100101011111110
**Hex:** CAFE
4.  Use a Low-level language, for example MIPS aseembler, to do so, you will need to follow  [this](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week1/resources/MIPS.md)  guide. We recomend to check the guide first but also  [this](https://courses.cs.vt.edu/cs2506/Fall2014/Notes/L04.MIPSAssemblyOverview.pdf)  presentation could be helpful.
5.  Base on the examples and the guide of the low-level language: 
5.1 Create a program to add two numbers given by the user 

	      .data
		        number1: .asciiz "\nIngrese el primer numero: "
		        number2: .asciiz "\nIngrese el segundo numero: "
		        resultado: .asciiz "\nEl resultado es: "
    
	       .text
		        main:
	            li $v0, 4
	            la $a0, number1
	            syscall

	            li $v0, 5
	            syscall

	            move $t0, $v0

	            li $v0, 4
	            la $a0, number2
	            syscall

	            li $v0, 5
	            syscall

	            move $t1, $v0

	            add $t2, $t0, $t1

	            li $v0, 4
	            la $a0 resultado
	            syscall

	            li $v0, 1
	            move $a0, $t2
	            syscall

5.2 Create a program that display your name

	  .data
	    message: .asciiz "\nGabriel Moyeda Estrada\n"
	  .text
	    main:
	      li $v0, 4
	      la $a0, message
	      syscall

## Week challenges (Thursday)  💻

1.  Search for real word applications of Javascript
-   Visual Studio Code.
-   Atom.
-   Wordpress, la Aplicación de Escritorio.
-   Slack, aplicación de Escritorio.
-   Github, aplicación de Escritorio.
-   Twitch, aplicación de Escritorio.
-   LightTable, Editor de Código Multiplataforma.
-   Hyper.
2.  (optional but great) Watch  [this](https://www.youtube.com/watch?v=LW6vQNE2jgc&t=1962s)  video
4.  (optional but great) Watch  [this](https://www.youtube.com/watch?v=KXkQJBASUOg)  video
5.  Follow the github course, you can find it  [here](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/recommended)
