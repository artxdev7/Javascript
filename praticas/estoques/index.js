let main = document.querySelector('main')
let section = document.createElement('section')
section.id = "produtos"
let h1 = document.createElement('h1')
h1.innerText = stock["nome"]
let btadd = document.createElement('input')
btadd.type = "button"
btadd.value = "Adicionar 1"
btadd.className = "add"
let btret = document.createElement('input')
btret.type = "button"
btret.value = "Retirar 1"
btret.className = "remove"
let btsai = document.createElement('input')
btsai.type = "button"
btsai.value = "Saiba mais"
btsai.className = "saiba"
let res = document.createElement('div')
res.id = "res"

section.appendChild(h1)
section.appendChild(btadd)
section.appendChild(btret)
section.appendChild(btsai)
section.appendChild(res)

main.appendChild(section)

let stock = JSON.parse(localStorage.getItem("produtosSalvos")) || []