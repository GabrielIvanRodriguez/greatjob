function howMuch(tot, part){
    switch (part){
        case 1:
            return tot;
        case 2:
            return tot*1.12;
        case 3:
            return tot*1.16;
        case 4:
            return tot*1.21;
        case 5:
            return tot*1.26;
        case 6:
            return tot*1.29;
        case 7:
            return tot*1.31;
        case 8:
            return tot*1.35;
        case 9:
            return tot*1.37;
        case 10:
            return tot*1.40;
        case 11:
            return tot*1.42;
        case 12:
            return tot*1.45;
    }
}
let totalPrice;
let cuotes;
do{
    totalPrice = Number(prompt('Ingrese el precio del producto que desea cuotificar'));
    if (totalPrice === 0){
        alert('El precio del producto debe ser mayor que 0');
    }
    console.log(totalPrice);
}while(totalPrice===0 || totalPrice<0);

do{
    cuotes = Number(prompt('En cuantas cuotas desea hacerlo?'));
    if(cuotes===0 && cuotes>12){
        alert('La cantidad de cuotas tiene que estar entre 1 y 12');
        }
}while(cuotes!==0 && cuotes>12);
    

totalPrice=howMuch(totalPrice,cuotes);

alert('Su producto valdrá ' + totalPrice + '. Cada una de las ' + cuotes +' cuotas valdrá ' + totalPrice/cuotes);   

