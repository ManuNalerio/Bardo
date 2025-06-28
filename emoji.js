// Lista de emojis para rotar
const emojis = ['🤘', '🛠️', '💻', '📊', '🤖', '🧠', '🌐'];
const emojiElement = document.querySelector('.texto-saludo');
let index = 0;

// Función para cambiar el emoji con efecto
function cambiarEmoji() {
    // Oculta el texto temporalmente
    emojiElement.classList.add('hidden');

    // Cambia el emoji después de 300ms (tiempo reducido)
    setTimeout(() => {
        index = (index + 1) % emojis.length; // Cicla entre los emojis
        emojiElement.innerHTML = `Hola, Soy Manu ${emojis[index]}`;
        emojiElement.classList.remove('hidden'); // Vuelve a mostrar el texto
    }, 200); // Reduce el tiempo de espera
}

// Cambia el emoji cada 1 segundo
setInterval(cambiarEmoji, 700); // Reduce el intervalo de 2000ms a 1000ms
