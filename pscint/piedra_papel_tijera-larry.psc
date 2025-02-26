Algoritmo piedra_papel_tijera
	definir turno_1,turno_2 Como Caracter
	
	Escribir "Hola! Bienbenido a mi juego de piedra papel o tijera por favor selecciona priedra papel o tijera en minusculas en los dos siguientes turnos"
	Leer  turno_1,turno_2
	
	//mirando si pueden quedar empatados
	Si turno_1 == turno_2
		escribir "Fue un empate"
	FinSi
	
	//mirando si estan poniendo algo inaceptable
	si (turno_1 == "piedra") o (turno_1 == "papel") o (turno_1== "tijera") Entonces
		// mirando quien gana segun la logica
		si (turno_1 == "piedra" y turno_2 == "tijera") o (turno_1 == "papel" y turno_2 == "piedra") o (turno_1 == "tijera" y turno_2 == "papel") Entonces
			Escribir "el ganador el el turno 1"
		FinSi
	SiNo
		Escribir "El turno nuemro 1 intridujo un valor no valido para jugar"
	FinSi
	
	si (turno_2 == "piedra") o (turno_2 == "papel") o (turno_2 == "tijera") Entonces
		si (turno_2 == "piedra" y turno_1== "tijera") o (turno_2 == "papel" y turno_1 == "piedra") o (turno_2 == "tijera" y turno_1 == "papel") Entonces
		Escribir  "El ganador el el turno numero 2"
	FinSi
	SiNo
		Escribir "El turno nuemro 2 intridujo un valor no valido para jugar"
	FinSi
	
	
	
	
	
FinAlgoritmo
