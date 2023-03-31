
/*plantilla para el menu*/
fetch("plantilla.html")
  .then(response => response.text())
  .then(data => {
    document.querySelector("#plantilla").innerHTML = data;
  });



