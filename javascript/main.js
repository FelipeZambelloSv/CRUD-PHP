// Inicialização de uma lista vazia para armazenar as tarefas
let minhaListaDeTarefas = [];

// Função para adicionar uma nova tarefa à lista
function adicionarTarefa() {
  console.log("Adicionando uma nova tarefa...");

  // Obter os valores dos campos de entrada do HTML
  const descricao = document.getElementById('descricao').value;
  const autor = document.getElementById('autor').value;
  const setor = document.getElementById('setor').value;
  const prioridadeSelect = document.getElementById('prioridade');
  const valor = document.getElementById('valor').value || null;
  const duracao = document.getElementById('duracao').value || null;
  const prioridade =
    prioridadeSelect.value === 'alta' ? 'alta' : 'baixa';

  // Criar um objeto que representa a nova tarefa
  const novaTarefa = {
    descricao,
    autor,
    setor,
    prioridade,
    valor,
    duracao,
  };

  // Adicionar a nova tarefa à lista
  minhaListaDeTarefas.push(novaTarefa);

  console.log("Nova tarefa adicionada:", novaTarefa);

  // Chamar a função para atualizar a exibição da lista
  atualizarMinhaLista();
}

// Função para remover uma tarefa da lista com base no índice
function removerTarefa(index) {
  console.log("Removendo a tarefa de índice", index);

  minhaListaDeTarefas.splice(index, 1); // Remove 1 elemento a partir do índice fornecido
  atualizarMinhaLista(); // Atualizar a exibição da lista após a remoção
}

// Função para atualizar a exibição da lista de tarefas na página
function atualizarMinhaLista() {
  console.log("Atualizando a exibição da lista...");

  const minhaListaContainer = document.getElementById('minhaLista');
  minhaListaContainer.innerHTML = ''; // Limpar a lista atual

  // Iterar sobre cada tarefa na lista e criar um elemento HTML para exibição
  minhaListaDeTarefas.forEach((tarefa, index) => {
    const tarefaItem = document.createElement('div');
    tarefaItem.className = 'tarefa-item';

    // Preencher o elemento com informações da tarefa
    tarefaItem.innerHTML = `
    <div class="tarefa">
      <p>descrição: ${tarefa.descricao}</p>
      <p>autor: ${tarefa.autor}</p>
      <p>setor: ${tarefa.setor}</p>
      <p>prioridade: ${
        tarefa.prioridade === 'alta' ? 'alta' : 'baixa'
      }</p>
      <p>valor: ${tarefa.valor || '-'}</p>
      <p>duração: ${tarefa.duracao || '-'}</p>
      <button class="botao-remover" onclick="removerTarefa(${index})">Remover</button>
    </div>`;

    // Definir a cor de fundo com base na prioridade da tarefa
    tarefaItem.style.backgroundColor =
      tarefa.prioridade === 'alta' ? '#DCADF2' : 'orange';

    // Adicionar o elemento da tarefa ao container da lista
    minhaListaContainer.appendChild(tarefaItem);
  });

  console.log("Exibição da lista atualizada.");
}
 