<?php
    include_once('configCadastro.php');
    if(isset($_POST['update']))
    {
        $id = $_POST['id'];
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $usuario = $_POST['usuario'];
        $senha = $_POST['senha'];
        $telefone = $_POST['telefone'];
        $sqlInsert = "UPDATE usuarios 
        SET nome='$nome',senha='$senha',email='$email',usuario='$usuario',telefone='$telefone'
        WHERE id=$id";
        $result = $conexao->query($sqlInsert);
        print_r($result);
    }
    header('Location: sistema.php');

?>