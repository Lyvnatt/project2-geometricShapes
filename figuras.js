// Código cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}

// Código triángulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Código círculo
function diametroCirculo(radio) {
  return radio * 2;
}
const PI = Math.PI;
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
function areaCirculo(radio) {
  return (radio * radio) * PI;
}



function calcularPerimetroCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = Number(input.value);

  const perimetro = perimetroCuadrado(value);
  alert("El perímetro del cuadrado es " + perimetro + " cm.")
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = Number(input.value);

  const area = areaCuadrado(value);
  alert("El área del cuadrado es " + area + " cm^2.");
}



function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("inputTriangulo1");
  const value1 = Number(input1.value);
  const input2 = document.getElementById("inputTriangulo2");
  const value2 = Number(input2.value);
  const input3 = document.getElementById("inputTriangulo3");
  const value3 = Number(input3.value);

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert("El perímetro del triángulo es " + perimetro + " cm.")
}

function calcularAreaTriangulo() {
  const input3 = document.getElementById("inputTriangulo3");
  const value3 = Number(input3.value);
  const inputH = document.getElementById("inputTrianguloH");
  const valueH = Number(inputH.value);

  const area = areaTriangulo(value3, valueH);
  alert("El área del triángulo es " + area + " cm^2.")
}



function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = Number(input.value);

  const perimetro = perimetroCirculo(value);
  alert("El perímetro del círculo es " + perimetro.toFixed(2) + " cm.");
}

function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = Number(input.value);

  const area = areaCirculo(value);
  alert("El área del círculo es " + area.toFixed(2) + " cm^2.");
}