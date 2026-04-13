function animerCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    const fontSize = 14;
    let colonnes, positions;

    function init() {
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        colonnes  = Math.floor(canvas.width / fontSize);
        positions = Array.from({ length: colonnes }, () =>
            canvas.height + Math.random() * canvas.height
        );
    }

    function dessiner() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < colonnes; i++) {
            const chiffre = Math.floor(Math.random() * 10).toString();
            const opacite = 0.1 + Math.random() * 0.2;
            ctx.fillStyle = `rgba(26, 115, 232, ${opacite})`;
            ctx.fillText(chiffre, i * fontSize, positions[i]);

            positions[i] -= fontSize;

            if (positions[i] < 0) {
                positions[i] = canvas.height + Math.random() * canvas.height;
            }
        }
    }

    init();
    window.addEventListener('resize', init);
    setInterval(dessiner, 60);
}

document.querySelectorAll('.card-canvas').forEach(animerCanvas);
