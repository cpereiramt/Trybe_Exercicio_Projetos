#!/bin/bash

FILE="/home/claytonpereira/Documentos/unix_shell/Script3.sh"
if [ -e "$FILE" ]
  then
     echo "O caminho $FILE está habilitado!"
fi
if [ -x "$FILE" ]
  then
    echo "Você tem permissão para editar $FILE"
  else
    echo "Você NÃO foi autorizado a editar $FILE"
fi