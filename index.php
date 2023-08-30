<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">

</head>
<body>
    <div class="logo">
        <img src="./imagens/logo-calriz.png" alt="Logo Calriz">
    </div>

    <div class="login">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-body">
                                <h3>Login</h3>
                            </div>
                            <form action="login.php" method="POST">
                            <div>
                                <div class="mb-3">
                                    <label>Usuário</label>
                                    <input type="text" 
                                    name="usuario" 
                                    class="form-control">        
                                </div>
                            </div>
                            <div>
                                <div class="mb-3">
                                <label>Senha</label>
                                    <input type="password" 
                                    name="senha" 
                                    class="form-control">        
                                </div>
                            </div>
                            <div>
                                <div class="mb-3">
                                    <button type ="submit" 
                                    class="btn 
                                    btn-primary">Enviar</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>