let pal = prompt('Ingresa una frase: ');
let letra = "a";
let count = 0;

for (var i = 0; i < pal.length; i++) {
    if (pal[i] === letra) {
        count++;
    }
}

console.log("La 'a', se repite, ", count, "veces");