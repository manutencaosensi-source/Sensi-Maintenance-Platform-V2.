/****************************************************
 * SENSI MAINTENANCE PLATFORM V2
 * EQUIPAMENTOS
 ****************************************************/


// Lista de equipamentos

function getEquipamentos(){


  try{


    const folha =
      getFolha(
        FOLHAS.EQUIPAMENTOS
      );


    const dados =
      folha
      .getDataRange()
      .getValues();


    let lista = [];



    for(let i = 1; i < dados.length; i++){


      lista.push({


        id:dados[i][0],


        equipamento:dados[i][1],


        setor:dados[i][2],


        marca:dados[i][3],


        modelo:dados[i][4],


        serie:dados[i][5],


        estado:dados[i][7]



      });


    }


    return lista;



  }
  catch(e){


    return [];


  }


}





// Ficha completa do equipamento
// usada pelos QR Codes


function getEquipamento(id){


  try{


    const folha =
      getFolha(
        FOLHAS.EQUIPAMENTOS
      );


    const dados =
      folha
      .getDataRange()
      .getDisplayValues();



    for(let i = 1; i < dados.length; i++){



      if(
        String(dados[i][0]).trim()
        ==
        String(id).trim()
      ){



        return {


          id:dados[i][0],


          equipamento:dados[i][1],


          setor:dados[i][2],


          marca:dados[i][3],


          modelo:dados[i][4],


          serie:dados[i][5],


          aquisicao:dados[i][6],


          estado:dados[i][7],


          formulario:dados[i][9],


          sop:dados[i][13],


          manualInstalacao:dados[i][14],


          manualInstrucoes:dados[i][15]



        };


      }


    }


    return null;



  }
  catch(e){


    return null;


  }


}





// Histórico de manutenção

function getHistoricoEquipamento(id){


  const folha =
    getFolha(
      FOLHAS.MANUTENCOES
    );


  const dados =
    folha
    .getDataRange()
    .getValues();



  let lista = [];



  for(let i = 1; i < dados.length; i++){


    if(
      String(dados[i][1])
      ==
      String(id)
    ){



      lista.push({


        data:
          formatarData(
            dados[i][0]
          ),


        tecnico:dados[i][4],


        tipo:dados[i][5],


        descricao:dados[i][6],


        estado:dados[i][7]



      });



    }


  }



  return lista;


}
