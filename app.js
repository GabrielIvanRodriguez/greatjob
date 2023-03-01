class Usuarios{
    constructor (name, pass){
        this.username = name;
        this.password = pass;
    }
}
let registeredUsers = [{username:'admin',password:'admin'}];
let logorsign;   
let outOrIn;
let nameUs;
let passUs;
let success;

function logIn(usuario){
    return usuario.username == nameUs && usuario.password === passUs;
}
function signUp(usuario){
    return usuario.username == nameUs;
}

do {
    logorsign = prompt('¡Bienvenidx a GreatJob! \n Para continuar, debe acceder a la plataforma.\n ¿Qué desea hacer?\n 1 - Iniciar sesión \n 2 - Registrarme');
    if (logorsign != 1 && logorsign !=2){
        alert('¡Debe ingresar una opción correcta!')
    }else{
            if(logorsign == 1){
                do{
                    nameUs = prompt ('Ingrese su usuario').toLowerCase();
                    passUs = prompt ('Ingrese su contraseña');
                    success = registeredUsers.find(logIn);
                    if (success == undefined){
                        alert('Usuario o contraseña incorrecto');   
                    }else{
                        alert('¡Bienvenido de nuevo, ' + nameUs + '!');
                    }
                }while(success === undefined);
            }else{
                do {
                    nameUs = prompt ('Para registrarte, elegí tu nombre de usuario y consulta su disponibilidad').toLowerCase();
                    success = registeredUsers.some(signUp);
                    if (success == true){
                        alert('El nombre de usuario ya ha sido elegido por otra persona. Ingresa uno nuevamente.');
                    }
                } while (success == true );
                do{
                    passUs = prompt('Ahora, ingrese una contraseña');
                    if(passUs == ''){
                        alert('Debe ingresar una contraseña. Inténtelo de nuevo.')
                    }
                }while(passUs=='');
                alert('Usuario registrado ¡Gracias por unirte a nuestra comunidad!');
                let usuario = new Usuarios (nameUs, passUs);
                registeredUsers.push(usuario);
            };
        
            do {
                outOrIn = prompt('¿Qué desea hacer? \n 1 - Visitar la página \n 2 - Cerrar sesión');
                if (outOrIn != 1 && outOrIn !=2){
                    alert('¡Debe ingresar una opción correcta!');
                }
                if (outOrIn ==1){
                    alert('La página está en mantenimiento. Lo redireccionaremos al menú anterior');
                    outOrIn = 3;
                }
            } while (outOrIn != 1 && outOrIn != 2);
            if(outOrIn == 2){
                alert('Sesión finalizada');
                logorsign = 3;
            }        
    }
} while (logorsign != 1 && logorsign != 2);









































/*
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

*/