let minhaListaDeTarefas = [];
let todasTarefas = []; 


function adicionarTarefa() {
  console.log("Adicionando uma nova tarefa...");

 
  const descricao = document.getElementById('descricao').value;
  const autor = document.getElementById('autor').value;
  const setor = document.getElementById('setor').value;
  const prioridadeSelect = document.getElementById('prioridade');
  const valor = document.getElementById('valor').value || null;
  const duracao = document.getElementById('duracao').value || null;
  const prioridade =
    prioridadeSelect.value === 'alta' ? 'alta' : 'baixa';


  const novaTarefa = {
    descricao,
    autor,
    setor,
    prioridade,
    valor,
    duracao,
  };

 
  todasTarefas.push(novaTarefa);
  minhaListaDeTarefas.push(novaTarefa);

  console.log("Nova tarefa adicionada:", novaTarefa);

  
  atualizarMinhaLista();
}


function aplicarFiltro() {
  const filtroPrioridade = document.getElementById('filtroPrioridade').value;
  
  if (filtroPrioridade === 'todas') {
    
    minhaListaDeTarefas = todasTarefas;
  } else if (filtroPrioridade === 'alta') {
   
    minhaListaDeTarefas = todasTarefas.filter((tarefa) => tarefa.prioridade === 'alta');
  } else if (filtroPrioridade === 'baixa') {
    
    minhaListaDeTarefas = todasTarefas.filter((tarefa) => tarefa.prioridade === 'baixa');
  }
  
  atualizarMinhaLista();
}


function removerTarefa(index) {
  console.log("Removendo a tarefa de índice", index);

  minhaListaDeTarefas.splice(index, 1); 
  atualizarMinhaLista(); 
}

function atualizarMinhaLista() {
  console.log("Atualizando a exibição da lista...");

  const minhaListaContainer = document.getElementById('minhaLista');
  minhaListaContainer.innerHTML = ''; 

  minhaListaDeTarefas.forEach((tarefa, index) => {
    const tarefaItem = document.createElement('div');
    tarefaItem.className = 'tarefa-item';

    tarefaItem.innerHTML = `
    <div class="tarefa">
      <p style="color: white;">descrição: ${tarefa.descricao}</p>
      <p style="color: white;">autor: ${tarefa.autor}</p>
      <p style="color: white;">setor: ${tarefa.setor}</p>
      <p style="color: white;">prioridade: ${
        tarefa.prioridade === 'alta' ? 'alta' : 'baixa'
      }</p>
      <p style="color: white;">valor: ${tarefa.valor || '-'}</p>
      <p style="color: white;">duração: ${tarefa.duracao || '-'}</p>
      <button class="botao-remover" onclick="removerTarefa(${index})">Remover</button>
    </div>`;

    if (tarefa.prioridade === 'alta') {
      tarefaItem.style.backgroundColor = '#105f04'; 
    } else {
      tarefaItem.style.backgroundColor = '#33a10a'; 
    }

    minhaListaContainer.appendChild(tarefaItem);
  });

  console.log("Exibição da lista atualizada.");
}