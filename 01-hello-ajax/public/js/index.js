const select = document.querySelector('select');
const headReportagem =
    document.querySelector('div.panel-heading');
const bodyReportagem =
    document.querySelector('div.panel-body');

select.addEventListener('change', change);

function change(e) {
  headReportagem.textContent = e.target.value;
  const url = `reportagens/${e.target.value}.html`;
  console.log(url); // ex.: reportagens/esportes.html
  ajax(url);
}

function ajax(url) {
  // criar um objeto XHR
  const xhr = new XMLHttpRequest();
  // abrir uma requisição (método, url, assíncrono)
  xhr.open('GET', url, true);
  // registrar um ouvinte para receber os dados
  xhr.onload = function(e) {
    bodyReportagem.innerHTML =
      e.currentTarget.responseText;
  };
  // enviar
  xhr.send();
}
