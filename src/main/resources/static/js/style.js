/*var entrada = document.querySelector('input');
var saida = document.querySelector('#respostaCpf');

/*function cliquei() {
    var cpf = entrada.value;
    saida.textContent = cpf;}*/


function cadastro(){
       alert('Seu CPF foi validado com sucesso!')
    }


const validaCampos = function(){
        if(document.getElementById("nome").value == ""){
          document.getElementById("erro").innerHTML = "Preencha o campo nome";
          document.getElementById("nome").focus();
          document.getElementById("erro").style.display = "block";
          return false;
        }

        if(document.getElementById("cpf").value == ""){
          document.getElementById("erro").innerHTML = "Preencha o campo cpf";
          document.getElementById("erro").style.display = "block";
          document.getElementById("cpf").focus();
          return false;
        }

        return true;
}


