let num = [2, 1, 4, 3, 5, 9, 8]
let pos = num.indexOf(7)
num.sort()

console.log(`${num}`);
if (pos == -1) {
    console.log('valor não encontrado');
} else {
    console.log(`o 9 esta na posição ${pos}`);
}

