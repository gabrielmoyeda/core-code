<h1 align="center"><b>Introduction to programming & Javascript</b> <br> Week 1 (10 - 14 Ene)</h1>

## Week goal 馃弫

<p>Learn about the basics of programming and start knowing Javascript</p>


<details>
  <summary>M谩s informaci贸n</summary>
  <h3>Week subtopics</h3>

- What does programming look like?
- What really is programming?
- What is a program?
- How a computer run a program?
- Algorithmic operations
  - Sequential
  - Conditional
  - Iterative
- Basic elements of programming
  - Instruction set
  - Variables
  - Input / Output
- "I have no idea what i'm doing" feeling
- Wat is javascript?
- What is an interpreted language?
- Javascript Hello World
- MDN Documentation
- Variables in Javascript
- Data types in Javascript
  - number
  - boolean
  - string
- comments in Javascript
</details>

---
## <mark>Week challenges (Tuesday) </mark>  馃捇

1.  Watch  [this](https://www.youtube.com/watch?v=JNMy969SjyU)  video about compilation and interpretation 
* Diferencias entre compilaci贸n e interpretaci贸n
* **Compilaci贸n:** convierte mi c贸digo a lenguaje binario para que pueda ser ejecutado.

|Pros|Contras|
|----|-------|
|M谩s r谩pido|No es multiplataforma|
|C贸digo fuente es privado|requiere de pasos extra para compilar  |

* **Int茅rprete:** se env铆a directamente mi c贸digo y el int茅rprete lo interpreta al vuelo, es decir, haciendo la ejecuci贸n l铆nea por l铆nea.

|Pros|Contras  |
|--|--|
|multiplataforma|mas lento|
|no requiere de pasos extras|el c贸digo es p煤blico  |
|facilita la depuracion||
2.  Search and answer the question: Java language is compiled or interpreted?  
Java se puede considerar tanto un lenguaje compilado como interpretado porque su c贸digo fuente se compila primero en un c贸digo de bytes binario. Este c贸digo de bytes se ejecuta en la m谩quina virtual de Java (JVM), que suele ser un int茅rprete basado en software. El uso de c贸digo de bytes compilado permite que el int茅rprete (la m谩quina virtual) sea peque帽o y eficiente (y casi tan r谩pido como la CPU que ejecuta c贸digo compilado nativo). Adem谩s, este c贸digo de bytes le da a Java su portabilidad: se ejecutar谩 en cualquier JVM que se implemente correctamente, independientemente de la configuraci贸n del hardware o software de la computadora. La mayor铆a de los navegadores web (como Microsoft Internet Explorer o Netscape Communicator) contienen una JVM para ejecutar applets de Java.
3.  Create an algorithm to calculate the equivalent of your local currencty to USD
	1. Solicitar Monto a convertir
	2. Resultado = Monto * 20
	3. Muestra el Resultado
4.  Read about Pseudocode  [here](https://www.freecodecamp.org/news/what-is-pseudocode-in-programming/), you can also find some examples  [here](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/resources/PSEUDOCODE.md)
5.  Anwser to the question: Why is pseudocode helpful?  
Por que es algo que escribiste tu, puedes crear tus propias reglas, es un m茅todo informal de dise帽o de programas, as铆 que finalmente una vez que tienes resuelto el problema, solo es cuesti贸n de pasarlo al lenguaje deseado.
6.  Create a pseudocode to calculate the aproximated age of a user base on the year they born, (you can define a variable with the actual year if you need it, like for example i could define Y <-- 2022)  
	1. Calcula Edad
	2. Variables: Y = 2022, Num1, Resultado
	3. Escribir "Ingrese el a帽o de nacimiento"
	4. Leer Num1
	5. Resultado = Y - Num1
	6. Escribir "Tu edad es:" *Resultado*   
	
7.  Read about flowcharts  [here](https://www.lucidchart.com/pages/es/que-es-un-diagrama-de-flujo)
8.  Answer to the question: Why are flowcharts important to us as developers?  
Un diagrama de flujo sirve para describir un proceso o un sistema sirve para documentar, estudiar, mejorar, entender procesos que pueden ser complejos de forma visual, es decir, diagramas claros y f谩ciles de comprender.
9.  Search about High-level languages and Low-level languages, you can start with  [this](https://www.youtube.com/watch?v=1vRPOp5p-qs)  video  
**Lenguajes de Alto Nivel**: es f谩cil de leer por el ser humano  
**Lenguaje de Bajo Nivel**: Es f谩cil de leer por el computador, pero no lo es tanto para el ser humano  
---
## <mark>Week challenges (Wednesday) </mark>  馃捇
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
```
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
```

5.2 Create a program that display your name
```
	.data
		message: .asciiz "\nGabriel Moyeda Estrada\n"
	.text
		main:
			li $v0, 4
			la $a0, message
			syscall
```
---
## <mark>Week challenges (Thursday) </mark> 馃捇

1.  Search for real word applications of Javascript
-   Visual Studio Code.
-   Atom.
-   Wordpress, la Aplicaci贸n de Escritorio.
-   Slack, aplicaci贸n de Escritorio.
-   Github, aplicaci贸n de Escritorio.
-   Twitch, aplicaci贸n de Escritorio.
-   LightTable, Editor de C贸digo Multiplataforma.
-   Hyper.
2.  (optional but great) Watch  [this](https://www.youtube.com/watch?v=LW6vQNE2jgc&t=1962s)  video
4.  (optional but great) Watch  [this](https://www.youtube.com/watch?v=KXkQJBASUOg)  video
5.  Follow the github course, you can find it  [here](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/recommended)
