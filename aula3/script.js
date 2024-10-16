function enter() {
  const valor = Number(document.getElementById("input").value);

  switch (valor) {
    case 3:
      document.getElementById("img").src = "./images/triangulo.jpeg";
      document.getElementById("perimetro").innerText = "Perímetro: P=3⋅l"
      document.getElementById("area").innerText = "Area: "
      break;
    case 4:
      document.getElementById("img").src = "./images/quadrado.png";
      document.getElementById("perimetro").innerText = "Perimetro: P=4⋅l"
      document.getElementById("area").innerText = "Area: "
      break;
    case 5:
      document.getElementById("img").src = "./images/pentagono.png";
      document.getElementById("perimetro").innerText = "Perimetro: P=5⋅l"
      document.getElementById("area").innerText = "Area: "
      break;
    case 6:
      document.getElementById("img").src = "./images/hexagono.jpg";
      document.getElementById("perimetro").innerText = "Perimetro: P=6⋅l"
      document.getElementById("area").innerText = "Area: "
      break;
    case 7:
      document.getElementById("img").src = "./images/heptagono.png";
      document.getElementById("perimetro").innerText = "Perimetro: P=7⋅l"
      document.getElementById("area").innerText = "Area: "
      break;
    case 8:
      document.getElementById("img").src = "./images/octogono.png";
      document.getElementById("perimetro").innerText = "Perimetro: P=8⋅l"
      document.getElementById("area").innerText = "Area: "
      break;
    case 9:
      document.getElementById("img").src = "./images/nonagono.png";
      document.getElementById("perimetro").innerText = "Perimetro: P=9⋅l"
      document.getElementById("area").innerText = "Area: "
      break;
    case 10:
      document.getElementById("img").src = "./images/decagono.jpg";
      document.getElementById("perimetro").innerText = "Perimetro: P=10⋅l"
      document.getElementById("area").innerText = "Area: "
      break;
    default:
      alert("Número não catalogado ou não existente");
      break;
  }
}
