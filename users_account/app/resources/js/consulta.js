var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

let inputCpf = document.querySelector("#cpf");
let inputNome = document.querySelector("#nome");
let inputEmail = document.querySelector("#email");
let inputCEP = document.querySelector("#cep");
let inputLogradouro = document.querySelector("#logradouro");
let inputBairro = document.querySelector("#bairro");
let inputCidade = document.querySelector("#localidade");
let inputEstado = document.querySelector("#uf");
let inputNumero = document.querySelector("#numero");
let inputComplemento = document.querySelector("#complemento");
let botaoSalvar = document.querySelector('#btnCadastrar');
let botaoLimpar = document.querySelector('#btnLimparCampos');

function verificarForm(){
    if(inputCpf.value == '' || inputEmail.value == '' || inputCEP.value == '' || inputNome.value == '' || inputLogradouro.value == ''){
        botaoSalvar.disabled = true;
    }else{
        botaoSalvar.disabled = false;
    }
}; 

function limparCampos() {
    inputCpf.value = '';
    inputNome.value = '';
    inputEmail.value = '';
    inputCEP.value = '';
    inputLogradouro.value = '';
    inputBairro.value = '';
    inputCidade.value = '';
    inputEstado.value = '';
    inputNumero.value = '';
    inputComplemento.value = '';
    botaoSalvar.disabled = true;
}


inputCpf.addEventListener("blur", function () {
    verificarForm();
});
inputNome.addEventListener("blur", function () {
    verificarForm();
});
inputEmail.addEventListener("blur", function () {
    verificarForm();
});
inputCEP.addEventListener("blur", function () {
    setTimeout(() => {
        verificarForm();    
    }, 4000);
    
});

function salvar(){
    botaoSalvar.disabled = true; //evitar multiplos cliques salvar e consequentemente dados duplicados no bd

    let contaUsuario = {
        cpf: inputCpf.value,
        nome: inputNome.value,
        email: inputEmail.value,
        cep: inputCEP.value,
        logradouro: inputLogradouro.value,
        bairro: inputBairro.value,
        cidade: inputCidade.value,
        estado: inputEstado.value,
        numero: inputNumero.value,
        complemento: inputComplemento.value
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8081/novo");
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = () => {

        if (xhr.readyState == 4) {

            if (xhr.status == 200) {
                Swal.fire({
                    title: '',
                    text: 'Dados Cadastrados com Sucesso!',
                    icon: 'success',
                    timer: 3000
                });
                limparCampos();
            } else {
                Swal.fire({
                    title: 'Ocorreu um erro no sistema',
                    text: xhr.statusText,
                    icon: 'error',
                    timer: 10000
                });
                botaoSalvar.disabled = false; 
            }
        }
    };
    
    xhr.send(JSON.stringify(contaUsuario));
}

botaoLimpar.addEventListener("click", function () {
    limparCampos();
})       

const cep = document.querySelector("#cep")

const apresentarDadosRecebidosViaCep = (consultaViaCep)=>{
    if(consultaViaCep.erro){
        Swal.fire({
            title: 'CEP não encontrado!',
            text: 'Este CEP não foi localizado e pode ser inválido. Verifique os dados informados e tente novamente.',
            icon: 'warning',
            confirmButtonText: 'Está bem.'
        });
    }else{
        for(const campo in consultaViaCep){
            if(document.querySelector("#"+campo)){
                document.querySelector("#"+campo).value = consultaViaCep[campo]
            }
        };
    
        Swal.fire({
            title: 'CEP encontrado!',
            text: 'Os dados de Endereço, Bairro, Cidade e Estado foram carregados automaticamente.',
            icon: 'success',
            timer: 4000
        });
    }
    
}

cep.addEventListener("blur",(evento)=>{
    document.querySelector("#erro-cep").value = '';

    if(cep.value.length == 9){
        let cepAPesquisar = cep.value.replace("-",""); //troque o '-' por espaço em branco.
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }

        fetch(`https://viacep.com.br/ws/${cepAPesquisar}/json/`, options)
        .then(resposta => { 
            resposta.json() //formate p/ json
                .then( 
                    dadosFormatados => apresentarDadosRecebidosViaCep(dadosFormatados)
                )
        })
        .catch(e => console.log('Erro na consulta ao ViaCep: '+ e.message))
    }else{
        document.querySelector("#logradouro").value = "";
        document.querySelector("#bairro").value = "";
        document.querySelector("#localidade").value = "";
        document.querySelector("#uf").value = "";

        Swal.fire({
            title: 'CEP inválido!',
            text: 'O CEP informado deve ser composto por 8 números! Verifique os dados informados e tente novamente.',
            icon: 'error',
            confirmButtonText: 'Tentar novamente'
        })
    }
    
});