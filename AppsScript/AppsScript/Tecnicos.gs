/****************************************************
 * SENSI MAINTENANCE PLATFORM V2
 * TÉCNICOS
 ****************************************************/


// Lista de técnicos ativos

function getTecnicos(){


  try{


    const folha =
      getFolha(
        FOLHAS.TECNICOS
      );


    const dados =
      folha
      .getDataRange()
      .getValues();



    let lista = [];



    for(let i = 1; i < dados.length; i++){


      const ativo =
        limparTexto(
          dados[i][1]
        )
        .toUpperCase();



      if(ativo === "SIM"){


        lista.push({


          nome:dados[i][0],


          ativo:true



        });


      }


    }



    return lista;



  }
  catch(e){


    return [];


  }


}





// Apenas nomes para dropdowns

function getNomesTecnicos(){


  const lista =
    getTecnicos();



  return lista.map(
    function(t){

      return t.nome;

    }
  );


}
