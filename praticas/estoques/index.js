let produtosSalvos = JSON.parse(localStorage.getItem("produtosSalvos")) || [];
let main = document.querySelector('main');

produtosSalvos.forEach(function (produto, index) {
    let section = document.createElement('section');
    section.id = "produtos";

    let h1 = document.createElement('h1');
    h1.innerText = produto.nome;

    let res = document.createElement('div');
    res.id = "res";
    res.innerText = `Valor: R$ ${produto.valor} | Qtd: ${produto.quantidade}`;

    // --- BOTÃO ADICIONAR (+1) ---
    let btadd = document.createElement('input');
    btadd.type = "button";
    btadd.value = "Adicionar 1";
    btadd.className = "add";

    btadd.addEventListener("click", function () {
        let stock = JSON.parse(localStorage.getItem("produtosSalvos")) || [];
        stock[index].quantidade++;
        localStorage.setItem("produtosSalvos", JSON.stringify(stock));
        res.innerText = `Valor: R$ ${produto.valor} | Qtd: ${stock[index].quantidade}`;
    });

    // --- BOTÃO REMOVER (-1) ---
    let btsub = document.createElement('input');
    btsub.type = "button";
    btsub.value = "Retirar 1";
    btsub.className = "remove";

    btsub.addEventListener("click", function () {
        let stock = JSON.parse(localStorage.getItem("produtosSalvos")) || [];

        // Só diminui se a quantidade for maior que 0
        if (stock[index].quantidade > 0) {
            stock[index].quantidade--;
            localStorage.setItem("produtosSalvos", JSON.stringify(stock));
            res.innerText = `Valor: R$ ${produto.valor} | Qtd: ${stock[index].quantidade}`;
        }
    });

    // --- BOTÃO EXCLUIR PRODUTO ---
    let btdel = document.createElement('input');
    btdel.type = "button";
    btdel.value = "Excluir";
    btdel.className = "delete";

    btdel.addEventListener("click", function () {
        let stock = JSON.parse(localStorage.getItem("produtosSalvos")) || [];
        stock.splice(index, 1);
        localStorage.setItem("produtosSalvos", JSON.stringify(stock));
        location.reload();
    });

    // Juntar tudo na secção do produto
    section.appendChild(h1);
    section.appendChild(res);
    section.appendChild(btadd);
    section.appendChild(btsub);
    section.appendChild(btdel);
    main.appendChild(section);
});

// MENU HAMBURGUER
let nav = document.querySelector('#hamburguer')
let menu = document.querySelector('#menu')

menu.addEventListener("click", function menus() {
    if (nav.style.display == "none" || nav.style.display == "") {
        nav.style.display = "flex"
    } else {
        nav.style.display = "none"
    }
})