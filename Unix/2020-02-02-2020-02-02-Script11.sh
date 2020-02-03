#!/bin/bash

extensao=".sh"
pasta=$(dirname $0)
dia=$(date +%F)
cd $pasta

for arquivos in `ls *$extensao`
  do 
  mv $arquivos ${dia}-${arquivos}
  done