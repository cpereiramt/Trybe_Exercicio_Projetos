#!/bin/bash

dataBR=$(date +%F)

for arquivos in `ls *.sh`
  do 
  mv $arquivos ${dataBR}-${arquivos}
  done
