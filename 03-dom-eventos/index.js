const pre = document.querySelector('pre');
const quadrado = document.querySelector('div#quadrado');
quadrado.style.left = '0px';
quadrado.style.top = '0px';

document.addEventListener('keydown', onkeydown);
document.addEventListener('keyup', onkeyup);

const teclas = [];

function loop() {
    console.log('loop ...');
    pre.textContent = teclas;
    if (teclas.indexOf('d') >= 0) {
        quadrado.style.left =
            (parseInt(quadrado.style.left) + 1) + 'px';
    }
    if (teclas.indexOf('a') >= 0) {
        quadrado.style.left =
            (parseInt(quadrado.style.left) - 1) + 'px';
    }
    if (teclas.indexOf('s') >= 0) {
        quadrado.style.top =
            (parseInt(quadrado.style.top) + 1) + 'px';
    }
    if (teclas.indexOf('w') >= 0) {
        quadrado.style.top =
            (parseInt(quadrado.style.top) - 1) + 'px';
    }
    setTimeout(loop, 1000 / 30); // 30 FPS
}

function onkeydown(e) {
    if (teclas.indexOf(e.key) >= 0) return;
    teclas.push(e.key);    
}

function onkeyup(e) {
    teclas.splice(e.key, 1);
}

loop();




