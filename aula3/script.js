function enter() {
  const valor = Number(document.getElementById("input").value);

  switch (valor) {
    case 3:
      document.getElementById("img").src = "./images/triangulo.jpeg";
      break;
    case 4:
      document.getElementById("img").src = "./images/quadrado.png";
      break;
    case 5:
      document.getElementById("img").src = "./images/pentagono.png";
      break;
    case 6:
      document.getElementById("img").src = "./images/hexagono.jpg";
      break;
    case 7:
      document.getElementById("img").src = "./images/heptagono.png";
      break;
    case 8:
      document.getElementById("img").src = "./images/octogono.png";
      break;
    case 9:
      document.getElementById("img").src = "./images/nonagono.png";
      break;
    case 10:
      document.getElementById("img").src = "./images/decagono.jpg";
      break;
    default:
      alert("Número não catalogado ou não existente");
      break;
  }
}
