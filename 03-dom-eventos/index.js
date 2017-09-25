const pre = document.querySelector('pre');
const quadrado = document.querySelector('div#quadrado');
quadrado.style.left = '0px';
quadrado.style.top = '0px';

document.addEventListener('keydown', onkeydown);
// document.addEventListener('keypress', onkeypress);
document.addEventListener('keyup', onkeyup);

const teclas = {};

function loop() {
    console.log('loop ...');
    pre.textContent = JSON.stringify(teclas);
    if (teclas['d']) {
        quadrado.style.left =
            (parseInt(quadrado.style.left) + 1) + 'px';
    }
    if (teclas['a']) {
        quadrado.style.left =
            (parseInt(quadrado.style.left) - 1) + 'px';
    }
    if (teclas['s']) {
        quadrado.style.top =
            (parseInt(quadrado.style.top) + 1) + 'px';
    }
    if (teclas['w']) {
        quadrado.style.top =
            (parseInt(quadrado.style.top) - 1) + 'px';
    }
    setTimeout(loop, 1000 / 30); // 30 FPS
}

function onkeydown(e) {
    teclas[e.key] = true;
}

function onkeypress(e) {
    teclas[e.key] = true;
}

function onkeyup(e) {
    teclas[e.key] = false;
}

loop();
