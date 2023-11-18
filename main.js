let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #9E4158;">La base es lo mas importante..</span>')
  .pauseFor(200)
  .deleteChars(2)
  .start();

  function mostrarVentanaEmergente() {
    var ventanaEmergente = document.getElementById('ventanaEmergente');
    ventanaEmergente.style.display = 'block';
}

