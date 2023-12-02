const square = document.getElementById('square');

function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

square.addEventListener('click', function() {
    const randomColor = getRandomHexColor();
    square.style.backgroundColor = randomColor;
    square.textContent = randomColor;
});