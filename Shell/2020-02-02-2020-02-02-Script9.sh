#!/bin/bash

#echo "Favor informar o nome de um arquivo ou diretório : "

diretorio=.

#diretorio=Script5.sh 

if [ -d "$diretorio" ]
  then
   conta=`ls -l $diretorio | wc -l`
     echo "O diretório $diretorio tem $conta arquivos"    
fi
if [ -f "$diretorio" ]
  then
    echo "O argumento $diretorio não é um diretório!"
fi