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

        /*if(TestaCPF(document.getElementById("cpf").value)){
          document.getElementById("erro").innerHTML = "CPF Invalido";
          document.getElementById("erro").style.display = "block";
          document.getElementById("cpf").focus();
          return false;
        }*/

        return true;
}

function TestaCPF(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;
    if (strCPF == "00000000000" ||
        strCPF == "11111111111" ||
        strCPF == "22222222222" ||
        strCPF == "33333333333" ||
        strCPF == "44444444444" ||
        strCPF == "55555555555" ||
        strCPF == "66666666666" ||
        strCPF == "77777777777" ||
        strCPF == "88888888888" ||
        strCPF == "99999999999" 
        )
     return false;

    /*if (strCPF.equals("00000000000") ||
    strCPF.equals("11111111111") ||
    strCPF.equals("22222222222") || CPF.equals("33333333333") ||
    strCPF.equals("44444444444") || CPF.equals("55555555555") ||
    strCPF.equals("66666666666") || CPF.equals("77777777777") ||
    strCPF.equals("88888888888") || CPF.equals("99999999999") ||
    (strCPF.length() != 11))
    return(false);*/


    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

    Soma = 0;
      for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
      return true;
    }
//var strCPF = "12345678909";
//alert(TestaCPF(strCPF));


