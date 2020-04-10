let valor_compra = 800;
let valor_venda =1000; 


if(valor_compra <= 0 || valor_venda <=0){
 
    console.error("Error, digite apenas valores positivos, diferente de zero")


}else{
let custo_produto = valor_compra * 0.20
valor_compra += custo_produto;
console.log("Custo total da compra de produtos por unidade " + valor_compra);

let lucro_liquido = valor_venda - valor_compra;

console.log("lucro por unidade é de " + lucro_liquido);
console.log(lucro_liquido + "*" + 1000+ " = " + lucro_liquido*1000 )

}