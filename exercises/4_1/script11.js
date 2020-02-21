let salario_bruto_inss =3000;
let salario_bruto_ir =3000;
let descontos_salario_inss = 0;
let descontos_salario_ir= 0;

if(salario_bruto_inss <= 1556.94)
{
descontos_salario_inss += salario_bruto_inss * 0.08;
console.log("descontando o inss" + descontos_salario_inss);
}else if(salario_bruto_inss >= 1556.94 && salario_bruto_inss <= 2594.92){
    descontos_salario_inss += salario_bruto * 0.09;
    console.log("descontando o inss 9% " + descontos_salario_inss);
}else if(salario_bruto_inss > 2594.92 && salario_bruto_inss < 5189.83){
    descontos_salario_inss = salario_bruto_ir * 0.11;
    console.log("descontando o inss 11% " + descontos_salario_inss);
}else if(salario_bruto_inss > 5189,82){

descontos_salario_inss = 570.88;
console.log("descontando o inss" + descontos_salario_inss);

}else if(salario_bruto_ir < 1903.99){
    descontos_salario_ir = 0 ;   
    console.log("descontando o ir" + descontos_salario_ir);
}else if(salario_bruto_ir > 1903.98 && salario_bruto_ir < 2826.66){

descontos_salario_ir += salario_bruto *0.075 + 142.80;
console.log("descontando o ir" + descontos_salario_ir);
}else if(salario_bruto_ir > 12826.65 && salario_bruto_ir < 3751.06){
    descontos_salario_ir += salario_bruto_ir *0.15 + 354.80;
    console.log("descontando o ir" + descontos_salario_ir);
}else if(salario_bruto_ir > 3751.05 && salario_bruto_ir < 4664.69){
    descontos_salario_ir += salario_bruto_ir * 0.225 + 636.13;
    console.log("descontando o ir" + descontos_salario_ir);
} 
else if(salario_bruto_ir > 4664.68){
    descontos_salario_ir += salario_bruto_ir *0.275 + 869.36;
    console.log("descontando o ir" + descontos_salario_ir);
   
}


let total_desconto = descontos_salario_ir + descontos_salario_inss;
console.log(total_desconto)
let salario_liquido = salario_bruto_ir - total_desconto;
console.log(salario_liquido);
console.log("esse que é para ser o resultado == 2.612,55")