document.addEventListener('DOMContentLoaded', function () {
    const drumPads = document.querySelectorAll('.drum-pad');
    const display = document.getElementById('display');
  
    // Función para manejar la reproducción de sonidos
    function playSound(audio) {
      audio.currentTime = 0;
      audio.play();
      display.textContent = audio.id;
    }
  
    // Event listener para hacer clic en los elementos .drum-pad
    drumPads.forEach((drumPad) => {
      drumPad.addEventListener('click', function () {
        const audio = this.querySelector('audio');
        if (audio) {
          playSound(audio);
        }
      });
    });
  
    // Event listener para presionar teclas
    document.addEventListener('keydown', function (event) {
      const key = event.key.toUpperCase();
      const drumPad = document.getElementById(key);
      if (drumPad) {
        const audio = drumPad.querySelector('audio');
        if (audio) {
          playSound(audio);
        }
      }
    });
  });  