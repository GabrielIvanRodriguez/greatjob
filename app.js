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
