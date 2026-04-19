// Animation de fond — colonnes de chiffres montants
const canvas = document.getElementById('bg-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    const fontSize = 16;
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
        ctx.fillStyle = 'rgba(244, 244, 244, 0.15)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font      = fontSize + 'px monospace';

        for (let i = 0; i < colonnes; i++) {
            const chiffre = Math.floor(Math.random() * 10).toString();
            const opacite = 0.15 + Math.random() * 0.25;
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

function calculer() {
    const n1 = parseFloat(document.getElementById('nombre1').value);
    const n2 = parseFloat(document.getElementById('nombre2').value);

    if (isNaN(n1) || isNaN(n2)) {
        alert('Veuillez entrer deux nombres valides.');
        return;
    }

    document.getElementById('somme').value      = n1 + n2;
    document.getElementById('difference').value = n1 - n2;
    document.getElementById('produit').value    = n1 * n2;
    document.getElementById('quotient').value   = n2 !== 0 ? n1 / n2 : 'Division par zéro';
}

function effacer() {
    document.getElementById('nombre1').value    = '';
    document.getElementById('nombre2').value    = '';
    document.getElementById('somme').value      = '0';
    document.getElementById('difference').value = '0';
    document.getElementById('produit').value    = '0';
    document.getElementById('quotient').value   = '0';
}

// Pour l'exercice 2

function appliquerChangements() {
    const carre = document.getElementById('carre');

    const message = document.getElementById('message').value;
    if (message !== '') {
        carre.innerText = message;
    }

    const couleur = document.getElementById('couleur').value;
    if (couleur !== '') {
        carre.style.backgroundColor = couleur;
    }

    const taille = document.getElementById('taille').value;
    carre.style.fontSize = taille + 'px';
}

