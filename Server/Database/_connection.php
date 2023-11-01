<?php
$host = $_ENV["host"];
$port = $_ENV["port"];
$dbname = $_ENV["dbname"];
$user = $_ENV["user"];
$pass = $_ENV["pass"];

try {
    $conexao = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8", $user, $pass);
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $erro) {
    echo "Erro na conexão: " . $erro->getMessage();
    exit;
}
?>