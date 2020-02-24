
            let outer = 5;
            let inner = 5;

            let text = "";

            for(let i = 1; i <= outer; i++ ){
                for(let j = 1; j <= inner; j++){
                    if(i + j > outer){
                        text = text.concat("*");
                    }else{
                        text = text.concat(" ")
                    }
                }
                text = text.concat("\n")
            }

            console.log(text)