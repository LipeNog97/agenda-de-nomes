const form =  document.getElementById('formAtividade');
let linhas = '';


form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNome = document.getElementById('nomeC');
    const inputTelefone = document.getElementById('telefoneC');

    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputTelefone.value}</td>`
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas ;

    inputNome.value = '';
    inputTelefone.value = '';

});