let amigo = {
    nome: 'jose',
    sexo: 'M',
    peso: 85.4,
    engordar(p = 0) {
        this.peso += p
        console.log(`engordou ${p}kg`);

    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`);
