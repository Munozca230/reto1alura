const textarea = document.querySelector('#texto');
const divNontext = document.querySelector('#div-nontext');
const divResult = document.querySelector('#div-result')
const pResult = document.querySelector('#p-result')

textarea.addEventListener('input', function() {
  if (textarea.value.trim() === '') {
    divNontext.style.display = 'flex';
    divResult.style.display = 'none';
  }
});

const encriptar = () => {
  if (textarea.value.trim() !== '') {
    divNontext.style.display = 'none';
    divResult.style.display = 'flex';
    encriptacion();
  }
}

const encriptacion = () => {
  let reemplazos = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
  }  
  let resultado = textarea.value.replace(/[aeiou]/gi, (match) => reemplazos[match.toLowerCase()] || match) 
  pResult.textContent = resultado;
}

const desencriptar = () => {
  if (textarea.value.trim() !== '') {
    divNontext.style.display = 'none';
    divResult.style.display = 'flex';
    desencriptacion();
  }
}

const desencriptacion = () => {
  let reemplazosInversos = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
  }
  let resultado = textarea.value.replace(/ai|enter|imes|ober|ufat/gi, (match) => reemplazosInversos[match.toLowerCase()] || match)  
  pResult.textContent = resultado;
}

const copiar = async () => {
  try {
    await navigator.clipboard.writeText(pResult.textContent);
    console.log('texto copiado');
  } catch (err) {
    console.error('fallo al copiar: ', err);
  }
}