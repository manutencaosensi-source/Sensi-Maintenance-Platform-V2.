/****************************************************
 * SENSI MAINTENANCE PLATFORM V2
 * SISTEMA DE LOGIN
 ****************************************************/


function validarLogin(utilizador, password){


  try{


    const folha = getFolha(
      FOLHAS.UTILIZADORES
    );


    const dados =
      folha
      .getDataRange()
      .getValues();



    for(let i = 1; i < dados.length; i++){


      const user =
        limparTexto(dados[i][0]);


      const pass =
        limparTexto(dados[i][1]);


      const nome =
        limparTexto(dados[i][2]);


      const perfil =
        limparTexto(dados[i][3]);


      const ativo =
        limparTexto(dados[i][4])
        .toUpperCase();



      if(
        user === utilizador &&
        pass === password &&
        ativo === "SIM"
      ){


        return {


          sucesso:true,


          nome:nome,


          perfil:perfil


        };


      }


    }


    return {


      sucesso:false


    };



  }
  catch(e){


    return {


      sucesso:false,


      erro:e.message


    };


  }


}



// Obter utilizador atual
// (vamos usar mais tarde com sessões)

function getUtilizadorAtual(){


  return {


    nome:"Tiago Silva",


    perfil:"ADMIN"


  };


}
