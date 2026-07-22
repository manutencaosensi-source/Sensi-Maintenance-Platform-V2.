/****************************************************
 * SENSI MAINTENANCE PLATFORM V2
 * CONFIGURAÇÕES GERAIS
 ****************************************************/


// ID da Base de Dados Google Sheets
const SPREADSHEET_ID = "1pHTLEfNGltdBPCHSuAxKG1H8FVAo8JGh1_A_yxAf7lQ";


// Nome das folhas da base de dados
const FOLHAS = {

  EQUIPAMENTOS: "EQUIPAMENTOS",

  MANUTENCOES: "MANUTENÇÕES",

  ORDENS_TRABALHO: "ORDENS_TRABALHO",

  TECNICOS: "TÉCNICOS",

  UTILIZADORES: "UTILIZADORES",

  CATEGORIAS: "CATEGORIAS"

};


// Estados das Ordens de Trabalho
const ESTADOS_OT = [

  "PENDENTE",
  "EM CURSO",
  "CONCLUÍDA",
  "CANCELADA"

];


// Prioridades
const PRIORIDADES = [

  "BAIXA",
  "NORMAL",
  "ALTA",
  "URGENTE"

];


// Tipos de manutenção
const TIPOS_MANUTENCAO = [

  "CORRETIVA",
  "PREVENTIVA"

];


// Versão da aplicação
const APP_VERSION = "2.0";

