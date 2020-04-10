const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  
  
 
//exercicio 1
  const adicionaTurno = (object,key,value) => {
    object[key] = value ;
    console.log(object);     

  }
 
  //exercicio 2
  const listaChaves = (object) => {
     console.log(Object.keys(object));
  }
 
  //exercicio 3
  const tamanhoObjetos = (object) => {
    console.log(Object.keys(object).length);
 }
  
 //exercicio 4
 const valoresObjeto = (object) => {
    console.log(Object.values(object));

 }
 
 //exercicio 5 
 const juntaObjetos = (object1, object2, object3) => {
      const objectFinal = Object.assign({object1},{object2},{object3});
     console.log(objectFinal);
     return objectFinal;
}

//exercicio 6 
const retornaEstudantesGeral = (result) => {
    let quantidade_Estudantes = 0 ;
    quantidade_Estudantes += Number(result.object1.numeroEstudantes) ;
    quantidade_Estudantes += Number(result.object2.numeroEstudantes) ;
    quantidade_Estudantes += Number(result.object3.numeroEstudantes) ;
    console.log(quantidade_Estudantes);
}

//exercicio 7
const valorbychave = (object, posicao, index) => {
 let chave =  Object.keys(object[posicao])[index];
  console.log(object[posicao][chave]);
}

//exercicio 8 

  adicionaTurno(lesson2,"turno","manha");
  listaChaves(lesson2);
  tamanhoObjetos(lesson2);
  valoresObjeto(lesson2);
  juntaObjetos(lesson1, lesson2,lesson3);
  retornaEstudantesGeral(juntaObjetos(lesson1, lesson2,lesson3));
  valorbychave(juntaObjetos(lesson1, lesson2,lesson3),"object1",3);