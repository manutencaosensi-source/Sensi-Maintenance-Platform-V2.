/****************************************************
 * SENSI MAINTENANCE PLATFORM V2
 * DASHBOARD
 ****************************************************/


function getDashboard(){


  try{


    const folhaOT =
      getFolha(
        FOLHAS.ORDENS_TRABALHO
      );


    const folhaEquip =
      getFolha(
        FOLHAS.EQUIPAMENTOS
      );


    const folhaTec =
      getFolha(
        FOLHAS.TECNICOS
      );



    const ots =
      folhaOT
      .getDataRange()
      .getValues();


    const equipamentos =
      folhaEquip
      .getDataRange()
      .getValues();


    const tecnicos =
      folhaTec
      .getDataRange()
      .getValues();



    let pendentes = 0;

    let emCurso = 0;

    let concluidas = 0;

    let tecnicosAtivos = 0;



    // Contar estados das OT

    for(let i = 1; i < ots.length; i++){


      const estado =
        limparTexto(
          ots[i][16]
        )
        .toUpperCase();



      if(estado === "PENDENTE"){
        pendentes++;
      }


      if(estado === "EM CURSO"){
        emCurso++;
      }


      if(
        estado === "CONCLUÍDA" ||
        estado === "CONCLUIDA"
      ){
        concluidas++;
      }


    }



    // Técnicos ativos

    for(let i = 1; i < tecnicos.length; i++){


      const ativo =
        limparTexto(
          tecnicos[i][1]
        )
        .toUpperCase();



      if(ativo === "SIM"){
        tecnicosAtivos++;
      }


    }



    // Últimas 10 OT

    let ultimasOT = [];


    for(
      let i = Math.max(1, ots.length - 10);
      i < ots.length;
      i++
    ){


      ultimasOT.push({


        id: ots[i][0],


        equipamento: ots[i][4],


        estado: ots[i][16],


        responsavel: ots[i][7],


        prioridade: ots[i][8]


      });


    }



    return {


      sucesso:true,


      pendentes:pendentes,


      emCurso:emCurso,


      concluidas:concluidas,


      equipamentos:
        equipamentos.length - 1,


      tecnicos:
        tecnicosAtivos,


      ultimasOT:
        ultimasOT



    };



  }
  catch(e){


    return {


      sucesso:false,


      erro:e.message


    };


  }


}
