//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Seleciona os elementos da DOM  
const amigoInput = document.getElementById('amigo');  
const listaAmigos = document.getElementById('listaAmigos');  
const resultado = document.getElementById('resultado');  

// Array para armazenar os nomes  
let amigos = [];  

// Função para adicionar um amigo à lista  
function adicionarAmigo() {  
    const nome = amigoInput.value.trim();  

    // Validação de entrada  
    if (!nome) {  
        alert('Por favor, insira um nome válido.');  
        return;  
    }  

    // Adiciona o nome à lista e ao array  
    amigos.push(nome);  
    
    // Atualiza a lista exibida na página  
    atualizarLista();  
    
    // Limpa o campo de entrada  
    amigoInput.value = '';  
}  

// Função para atualizar a lista visível  
function atualizarLista() {  
    listaAmigos.innerHTML = ''; // Limpa a lista atual  
    amigos.forEach((amigo) => {  
        const li = document.createElement('li');  
        li.textContent = amigo;  
        listaAmigos.appendChild(li);  
    });  
}  

// Função para sortear amigo  
function sortearAmigo() {  
    if (amigos.length === 0) {  
        alert('Adicione pelo menos um nome antes de sortear.');  
        return;  
    }  

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);  
    const amigoSorteado = amigos[indiceAleatorio];  

    // Exibe o resultado do sorteio  
    resultado.innerHTML = `<li>O amigue secreto é: <strong>${amigoSorteado}</strong></li>`;  
}  
