
Files="Script8.sh Script7.sh Script6.sh teste dfasdfas"

for File in $Files
  do
if [ -d "$File" ]
  then
     echo "O caminho especificado é um diretório "
    # ls -l
  echo " "
fi
if [ -f "$File" ]
  then
    echo "O caminho especificado é um arquivo"
   # ls -l
   echo " "
   else
        echo "$FILE é alguma outra coisa"
fi

done
