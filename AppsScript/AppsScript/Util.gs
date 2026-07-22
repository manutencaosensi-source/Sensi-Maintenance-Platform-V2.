/****************************************************
 * SENSI MAINTENANCE PLATFORM V2
 * FUNÇÕES UTILITÁRIAS
 ****************************************************/


// Abrir Base de Dados

function getBaseDados(){

  return SpreadsheetApp
    .openById(SPREADSHEET_ID);

}



// Obter uma folha

function getFolha(nome){

  const ss = getBaseDados();

  return ss.getSheetByName(nome);

}



// Formatar data

function formatarData(data){

  if(!data){
    return "";
  }


  return Utilities.formatDate(
    new Date(data),
    Session.getScriptTimeZone(),
    "dd/MM/yyyy HH:mm"
  );

}



// Gerar próximo número de OT

function gerarNumeroOT(){


  const folha = getFolha(
    FOLHAS.ORDENS_TRABALHO
  );


  const ultimaLinha = folha.getLastRow();


  let numero = 1;


  if(ultimaLinha > 1){

    const ultimo =
      folha.getRange(
        ultimaLinha,
        1
      ).getValue();


    numero =
      parseInt(
        String(ultimo)
        .replace("OT","")
      ) + 1;

  }


  return "OT" +
    String(numero)
    .padStart(6,"0");


}



// Limpar texto

function limparTexto(valor){

  if(valor === null || valor === undefined){

    return "";

  }


  return String(valor).trim();

}



// Verificar valor vazio

function estaVazio(valor){

  return (
    valor === "" ||
    valor === null ||
    valor === undefined
  );

}



// Resposta padrão

function respostaOK(dados){

  return {

    sucesso:true,
    dados:dados || null

  };

}



function respostaErro(mensagem){

  return {

    sucesso:false,
    erro:mensagem

  };

}
