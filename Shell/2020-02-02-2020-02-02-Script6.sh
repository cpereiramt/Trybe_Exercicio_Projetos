#!/bin/bash

echo "Favor informar o nome de um arquivo ou diretório : "

read FILE 

if [ -d "$FILE" ]
  then
     echo "O caminho especificado é um diretório "
     ls -l
fi
if [ -f "$FILE" ]
  then
    echo "O caminho especificado é um arquivo"
    ls -l
fi