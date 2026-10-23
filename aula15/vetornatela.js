let varlores = [4, 8, 9, 4, 3, 7, 2]
varlores.sort()

/*for (let pos = 0; pos < varlores.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${varlores[pos]}`);

}*/

for (let pos in varlores) {
    console.log(`a posição ${pos} tem o valor ${varlores[pos]}`);

}