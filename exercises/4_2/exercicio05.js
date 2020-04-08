
            let size = 7;          

            let text = "";

            for(let i = 1; i <= size; i++ ){
                for(let j = 1; j <= size; j++){
                    if(i + j > size){
                        if(i % 2 != 0)
                         if(j + i ==0 || j + i == 2 * i - 1)
                        {
                        text = text.concat("*");
                    }
                    }else{
                        text = text.concat("r")
                    }
                }
                text = text.concat("\n")
            }

            console.log(text)

  