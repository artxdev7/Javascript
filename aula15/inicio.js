let num = [4, 2, 5, 6, 3, 7, 1, 8]

/*for (let pos = 0; pos < num.length; pos++) {
    num.sort()
    console.log(`a posição ${pos} tem o valor ${num[pos]}`);

}*/

for (let pos in num) {
    console.log(`a posição ${pos} tem o valor ${num[pos]}`);

}