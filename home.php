<?php
    session_start();
    if (!isset($SESSION['usuario'])) {
        header("Location: login.php");
        exit();
    }
    echo "Bem-vindo, " . $_SESSION['usuario'] . "!";
    //imprimir usuário e senha
    echo "<br>Usúario: " . $_SESSION['usuario']."<br>Senha: " . $_SESSION['senha'];
?>