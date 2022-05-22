// CALCULAMOS DATOS DEL CUADRADO
console.group("Cuadrados")
    const ladoCuadrado = 5;
    console.log("Los lados del cuadrado, miden: " + ladoCuadrado + "cm.")

    // Calculamos el perímetro del del cuadrado
    const perimetroCuadrado = ladoCuadrado * 4;
    console.log("El perimetro del cuadado es: " + perimetroCuadrado + "cm.")

    // Calculamos el área del del cuadrado
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log("El área del cuadrado es: " + areaCuadrado + "cm2.")
console.groupEnd();

// CALCULAMOS DATOS DEL TRIÁNGULO
console.group("Triángulos")
    const ladoTriangulo_01 = 6;
    const ladoTriangulo_02 = 6;
    const baseTriangulo = 4;
    console.log("Los lados del triángulo miden: " + ladoTriangulo_01 + "cm " + ladoTriangulo_02 + "cm " + baseTriangulo + "cm")

    const alturaTriangulo = 5.5;
    console.log("La altura del triángulo es: " + alturaTriangulo + "cm.")
    
    const perimetroTriangulo = ladoTriangulo_01 + ladoTriangulo_02 + baseTriangulo;
    console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm.")

    const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    console.log("El área del triángulo es: " + areaTriangulo + "cm2.")
console.groupEnd();

// CALCULAMOS DATOS DEL CÍRCULOS
console.group("Círculos")

    // Radio
    const radioCirculo = 4;
    console.log("El área del círculo es: " + radioCirculo + " cm")

    // Diámetro
    const diametroCirculo = 4;
    console.log("El diámetro del círculo es: " + radioCirculo * 2 + " cm")

    // PI
    const PI = Math.PI;
    console.log("El valos de la constante PI es: " + PI)

    // Circunferencia
    const perimetroCirculo = diametroCirculo * PI;
    console.log("El perímetro del círculo es: " + perimetroCirculo + " cm")

    // Área
    const areaCirculo = (radioCirculo * radioCirculo) * PI;
    console.log("El área del círculo es: " + areaCirculo + " cm")

console.groupEnd();

 