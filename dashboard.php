<?php 
    session_start();
    if(empty($_SESSION)){
        print "<script>location.href='index.php';</script>";
    }
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista Tarefas</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <script defer src="./javascript/main.js"></script>
    <link rel="stylesheet" type="text/css" href="./css/groovy.css">

</head>

<body>
    <h1 class="titulo"> 
        Minha Lista de Tarefas
    </h1>
    <a id="exit" href="./index.php" class="sair-button">Sair</a>


    <div class="formulario">
        <label for="descricao">Descrição:</label>
        <input type="text" id="descricao">

        <label for="autor">Autor:</label>
        <input type="text" id="autor">

        <label for="setor">Setor:</label>
        <input type="text" id="setor">

        <label for="prioridade">Prioridade:</label>
        <select id="prioridade">
            <option value="alta">Alta</option>
            <option value="baixa">Baixa</option>
        </select>

        <label for="valor">Valor (opcional):</label>
        <input type="text" id="valor">

        <label for="duracao">Duração (opcional):</label>
        <input type="text" id="duracao">
    </div>

    <button onclick="adicionarTarefa()">Adicionar Tarefa</button>

    <div id="minhaLista"></div>



</body>
</html>