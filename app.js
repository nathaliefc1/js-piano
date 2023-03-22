const pianoKeys = document.querySelectorAll('.key')

function playSound(newUrl) {
    new Audio().play()
}

pianoKeys.forEach((pianoKey, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1)
    const newUrl = 'keys/key' + number + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl))
})