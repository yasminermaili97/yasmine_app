document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#btnpremios");
  const textBox = document.querySelector("#premios");


  button.addEventListener("click", () => {
    textBox.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#btnimpacto");
  const textBox = document.querySelector("#impacto");


  button.addEventListener("click", () => {
    textBox.classList.toggle("active");
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#btncifras");
  const textBox = document.querySelector("#cifras");


  button.addEventListener("click", () => {
    textBox.classList.toggle("active");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#btnlegado");
  const textBox = document.querySelector("#legado");


  button.addEventListener("click", () => {
    textBox.classList.toggle("active");
  });
});