let lista = document.getElementById("minhaLista");

const formulario = document.getElementById("form");
const ulPessoas = document.getElementById("ul");

if (lista) {
    lista = JSON.parse(lista);
} else {
    lista = [];
}

listar();

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let novaPessoa = new Object();
    novaPessoa.nome = this.nome.value;
    novaPessoa.telefone = this.telefone.value;

    if (this.id.value !== "" && this.id.value >=0) {
        lista[this.id.value] = novaPessoa;
    } else {
        lista.push(novaPessoa);
    }

    this.reset();
    this.id.value = null;

    salvarLS();

    listar();
})

function listar(filtro = '') {
    ulPessoas.innerHTML = "";
    lista.forEach((item, key) => {

        if (item.nome.toUpperCase().indexOf(filtro.toUpperCase()) >= 0 || filtro == "") {
            linha = document.createElement('li');

            let s = `<button onClick="excluir(${key})">[Excluir]</button>
                    <button onClick="editar(${key})">[Editar]</button>`

            linha.innerHTML = "Nome: " + item.nome + " Telefone: " + item.telefone + s;
            ulPessoas.appendChild(linha);
        }
    });
}

function excluir(id) {
    formulario.reset();
    lista.splice(id, 1);
    salvarLS();
    
}

function editar(id) {
    formulario.id.value = id;
    formulario.nome.value = lista[id].nome;
    formulario.telefone.value = lista[id].telefone;
}

function salvarLS() {
    localStorage.setItem("minhaLista", JSON.stringify(lista));
}