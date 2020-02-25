let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  //Exercicio numero 01 

  console.log("Bem vinda ," , info.personagem);

   //Exercicio numero 02
   
   info.recorrente="sim";
   console.log(info)

   //Exercicio numero 03
   
   for(i in info){
    console.log(i);

   }

   //Exercicio numero 04

   for(i in info){
   console.log(info[i]);

   }

  //Exercicio numero 05 

    info = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente:"sim"
  };

  
  console.log(info);