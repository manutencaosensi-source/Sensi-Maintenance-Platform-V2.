/****************************************************
 SENSI MAINTENANCE PLATFORM V2
 CONTROLADOR PRINCIPAL
****************************************************/


function doGet(e){


  const pagina =
    e &&
    e.parameter &&
    e.parameter.pagina
    ?
    e.parameter.pagina
    :
    "login";



  const paginasPermitidas = [

    "login",
    "dashboard",
    "listaOT",
    "ot",
    "equipamentos"

  ];



  if(
    paginasPermitidas.indexOf(pagina)
    ===
    -1
  ){

    return HtmlService
    .createHtmlOutput(
      "Página não encontrada"
    );

  }



  return HtmlService
  .createTemplateFromFile(pagina)
  .evaluate()
  .setTitle(
    "Sensi Maintenance Platform"
  )
  .setXFrameOptionsMode(
    HtmlService.XFrameOptionsMode.ALLOWALL
  );


}





// Incluir ficheiros HTML

function include(nome){


  return HtmlService
  .createHtmlOutputFromFile(nome)
  .getContent();


}





// URL da aplicação

function getAppUrl(){


  return ScriptApp
  .getService()
  .getUrl();


}





// Carregar páginas internas

function getPagina(nome){


  return HtmlService
  .createHtmlOutputFromFile(nome)
  .getContent();


}
