const cursorEffect = document.querySelector('.cursor-effect');

document.addEventListener('mousemove', function(event) {
    console.log('event fired!')
    const x = event.clientX;
    const y = event.clientY;

    cursorEffect.style.transform = `translate(${x}px, ${y}px)`;
    console.log(`Cursor position: ${x}, ${y}`);
});
