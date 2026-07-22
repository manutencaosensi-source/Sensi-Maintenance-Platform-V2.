/****************************************************
 * SENSI MAINTENANCE PLATFORM V2
 * ORDENS DE TRABALHO
 ****************************************************/


// Obter lista de OT

function getOrdensTrabalho(){


  try{


    const folha =
      getFolha(
        FOLHAS.ORDENS_TRABALHO
      );


    const dados =
      folha
      .getDataRange()
      .getValues();


    let lista = [];



    for(let i = 1; i < dados.length; i++){


      lista.push({


        id:dados[i][0],


        origem:dados[i][1],


        tipo:dados[i][2],


        categoria:dados[i][3],


        equipamento:dados[i][4],


        idEquipamento:dados[i][5],


        local:dados[i][6],


        responsavel:dados[i][7],


        prioridade:dados[i][8],


        dataCriacao:dados[i][9],


        dataPrevista:dados[i][10],


        estado:dados[i][16],


        observacoes:dados[i][17]



      });


    }



    return lista;



  }
  catch(e){


    return [];


  }


}





// Criar nova OT

function criarOT(dados){


  try{


    const folha =
      getFolha(
        FOLHAS.ORDENS_TRABALHO
      );



    const id =
      gerarNumeroOT();



    folha.appendRow([


      id,


      dados.origem || "MANUAL",


      dados.tipo || "CORRETIVA",


      dados.categoria || "",


      dados.equipamento || "",


      dados.idEquipamento || "",


      dados.local || "",


      dados.responsavel || "",


      dados.prioridade || "NORMAL",


      new Date(),


      dados.dataPrevista || "",


      "",


      "",


      dados.tempoEstimado || "",


      dados.unidadeTempo || "",


      "",


      "PENDENTE",


      dados.observacoes || "",


      dados.criadoPor || ""



    ]);



    return respostaOK(id);



  }
  catch(e){


    return respostaErro(
      e.message
    );


  }


}





// Alterar estado da OT

function atualizarEstadoOT(id, estado){


  const folha =
    getFolha(
      FOLHAS.ORDENS_TRABALHO
    );


  const dados =
    folha
    .getDataRange()
    .getValues();



  for(let i = 1; i < dados.length; i++){


    if(dados[i][0] == id){


      folha
      .getRange(
        i + 1,
        17
      )
      .setValue(estado);



      return true;


    }


  }


  return false;


}
